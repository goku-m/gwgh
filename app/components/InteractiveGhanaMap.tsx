"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";
import { regions } from "../data/regions";

const MAP_WIDTH = 1077;
const MAP_HEIGHT = 1460;
function formatMetric(value: number, suffix = "") {
  const plus = value === 0 ? "" : "+";
  return `${value.toLocaleString("en-US")}${plus}${suffix}`;
}

type RegionLookup = {
  regionIndexByPixel: Int8Array;
  imageData: ImageData;
};

type Tooltip = {
  x: number;
  y: number;
  regionIndex: number;
  flipX: boolean;
  flipY: boolean;
};

function buildLookup(mask: ImageData, cleanImage: ImageData): RegionLookup {
  const regionIndexByPixel = new Int8Array(mask.width * mask.height);
  regionIndexByPixel.fill(-1);

  for (let index = 0; index < regionIndexByPixel.length; index += 1) {
    const offset = index * 4;
    if (mask.data[offset + 3] === 0) continue;

    let nearestRegion = -1;
    let nearestDistance = Number.POSITIVE_INFINITY;
    for (let regionIndex = 0; regionIndex < regions.length; regionIndex += 1) {
      const [red, green, blue] = regions[regionIndex].color;
      const redDistance = mask.data[offset] - red;
      const greenDistance = mask.data[offset + 1] - green;
      const blueDistance = mask.data[offset + 2] - blue;
      const distance =
        redDistance * redDistance +
        greenDistance * greenDistance +
        blueDistance * blueDistance;

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestRegion = regionIndex;
      }
    }

    regionIndexByPixel[index] = nearestRegion;
  }

  return { regionIndexByPixel, imageData: cleanImage };
}

export default function InteractiveGhanaMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lookupRef = useRef<RegionLookup | null>(null);
  const activeRegionIndexRef = useRef<number | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [ready, setReady] = useState(false);

  function draw(regionIndex: number | null) {
    const canvas = canvasRef.current;
    const lookup = lookupRef.current;
    if (!canvas || !lookup) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.putImageData(lookup.imageData, 0, 0);
    if (regionIndex === null) return;

    const overlay = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let index = 0; index < lookup.regionIndexByPixel.length; index += 1) {
      if (lookup.regionIndexByPixel[index] === regionIndex) {
        const offset = index * 4;
        overlay.data[offset] = 101;
        overlay.data[offset + 1] = 163;
        overlay.data[offset + 2] = 13;
        overlay.data[offset + 3] = 210;
      }
    }
    context.putImageData(overlay, 0, 0);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;
    const mapContext = context;

    const cleanImage = new Image();
    const maskImage = new Image();
    let cleanLoaded = false;
    let maskLoaded = false;

    function initialize() {
      if (!cleanLoaded || !maskLoaded) return;

      mapContext.drawImage(cleanImage, 0, 0, MAP_WIDTH, MAP_HEIGHT);
      const cleanImageData = mapContext.getImageData(
        0,
        0,
        MAP_WIDTH,
        MAP_HEIGHT
      );

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = MAP_WIDTH;
      maskCanvas.height = MAP_HEIGHT;
      const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (!maskContext) return;
      maskContext.drawImage(maskImage, 0, 0, MAP_WIDTH, MAP_HEIGHT);

      lookupRef.current = buildLookup(
        maskContext.getImageData(0, 0, MAP_WIDTH, MAP_HEIGHT),
        cleanImageData
      );
      setReady(true);
    }

    cleanImage.onload = () => {
      cleanLoaded = true;
      initialize();
    };
    maskImage.onload = () => {
      maskLoaded = true;
      initialize();
    };
    cleanImage.src = "/ghana-impact-map.png";
    maskImage.src = "/ghana-region-mask.png";
  }, []);

  function getRegionIndex(
    event: PointerEvent<HTMLCanvasElement>
  ) {
    const canvas = canvasRef.current;
    const lookup = lookupRef.current;
    if (!canvas || !lookup) return null;

    const bounds = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - bounds.left) / bounds.width) * MAP_WIDTH);
    const y = Math.floor(
      ((event.clientY - bounds.top) / bounds.height) * MAP_HEIGHT
    );
    const regionIndex = lookup.regionIndexByPixel[y * MAP_WIDTH + x];

    return regionIndex >= 0 ? regionIndex : null;
  }

  function handlePointerMove(event: PointerEvent<HTMLCanvasElement>) {
    const regionIndex = getRegionIndex(event);
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (regionIndex !== activeRegionIndexRef.current) {
      activeRegionIndexRef.current = regionIndex;
      draw(regionIndex);
    }

    if (regionIndex === null) {
      setTooltip(null);
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    setTooltip({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      regionIndex,
      flipX: event.clientX - bounds.left > bounds.width - 240,
      flipY: event.clientY - bounds.top > bounds.height - 190,
    });
  }

  function handlePointerLeave() {
    activeRegionIndexRef.current = null;
    setTooltip(null);
    draw(null);
  }

  return (
    <div>
      <div className="relative mx-auto w-full max-w-3xl">
        <canvas
          ref={canvasRef}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          className={`h-auto w-full ${ready ? "cursor-default" : "cursor-wait"}`}
          aria-label="Interactive map of Ghana. Hover over a region to view its impact data."
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        />
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 w-56 rounded-xl bg-lime-950 p-4 text-left text-white shadow-xl"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: `translate(${tooltip.flipX ? "-240px" : "16px"}, ${
                tooltip.flipY ? "-190px" : "16px"
              })`,
            }}
            role="status"
          >
            <p className="font-bold">
              {regions[tooltip.regionIndex].name} Region
            </p>
            <dl className="mt-3 space-y-2 text-xs">
              <div>
                <dt className="text-lime-300">Trees planted</dt>
                <dd className="font-semibold">
                  {formatMetric(regions[tooltip.regionIndex].treesPlanted)}
                </dd>
              </div>
              <div>
                <dt className="text-lime-300">Crops cultivated</dt>
                <dd className="font-semibold">
                  {formatMetric(
                    regions[tooltip.regionIndex].cropsCultivated,
                    " acres"
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-lime-300">Communities impacted</dt>
                <dd className="font-semibold">
                  {formatMetric(
                    regions[tooltip.regionIndex].communitiesImpacted
                  )}
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Move your pointer over a region to highlight it and view its impact data.
      </p>
    </div>
  );
}
