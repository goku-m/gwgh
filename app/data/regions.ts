export type Region = {
  slug: string;
  name: string;
  color: [number, number, number];
  treesPlanted: number;
  cropsCultivated: number;
  communitiesImpacted: number;
};

// Sample regional data for demonstration. Edit these values when verified
// regional figures are available. Public impact totals are calculated from
// this dataset.
export const regionalImpactDataset: Region[] = [
  { slug: "upper-west", name: "Upper West", color: [189, 188, 69], treesPlanted: 90000, cropsCultivated: 12, communitiesImpacted: 34 },
  { slug: "upper-east", name: "Upper East", color: [127, 127, 127], treesPlanted: 80000, cropsCultivated: 10, communitiesImpacted: 15 },
  { slug: "north-east", name: "North East", color: [193, 177, 210], treesPlanted: 70000, cropsCultivated: 8, communitiesImpacted: 12 },
  { slug: "northern", name: "Northern", color: [133, 88, 78], treesPlanted: 20000, cropsCultivated: 25, communitiesImpacted: 22 },
  { slug: "savannah", name: "Savannah", color: [237, 185, 209], treesPlanted: 10000, cropsCultivated: 20, communitiesImpacted: 15 },
  { slug: "oti", name: "Oti", color: [213, 126, 190], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "bono-east", name: "Bono East", color: [81, 157, 62], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "bono", name: "Bono", color: [239, 133, 54], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "western-north", name: "Western North", color: [170, 216, 227], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "ahafo", name: "Ahafo", color: [57, 118, 175], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "ashanti", name: "Ashanti", color: [178, 199, 229], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "eastern", name: "Eastern", color: [197, 57, 50], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "volta", name: "Volta", color: [219, 219, 149], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "western", name: "Western", color: [87, 188, 204], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "central", name: "Central", color: [168, 220, 147], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
  { slug: "greater-accra", name: "Greater Accra", color: [141, 107, 183], treesPlanted: 0, cropsCultivated: 0, communitiesImpacted: 0 },
];

export const regions = regionalImpactDataset;

export function regionHasReportedActivity(region: Region) {
  return (
    region.treesPlanted > 0 ||
    region.cropsCultivated > 0 ||
    region.communitiesImpacted > 0
  );
}

export const regionalImpactTotals = regionalImpactDataset.reduce(
  (totals, region) => ({
    treesPlanted: totals.treesPlanted + region.treesPlanted,
    cropsCultivated: totals.cropsCultivated + region.cropsCultivated,
    communitiesImpacted:
      totals.communitiesImpacted + region.communitiesImpacted,
  }),
  {
    treesPlanted: 0,
    cropsCultivated: 0,
    communitiesImpacted: 0,
  }
);

export function getRegion(slug: string) {
  return regionalImpactDataset.find((region) => region.slug === slug);
}
