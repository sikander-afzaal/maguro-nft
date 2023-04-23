import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: { point: { radius: 0 } },
  scales: {
    x: {
      ticks: { display: false },
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      ticks: { display: false },
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [15, 20, 16, 16, 12, 14, 18],
      backgroundColor: "rgba(229, 57, 53, 0.5)",
      borderColor: "#E53935",
      fill: true,
    },
  ],
};

export default function GraphLine() {
  return <Line options={options} data={data} />;
}
