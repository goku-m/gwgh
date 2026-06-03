"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  labels: string[];
  values: number[];
};

export default function PieChart({ labels, values }: PieChartProps) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#F97316", "#22c55e"], // customize colors
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return <Pie data={data} options={options} />;
}
