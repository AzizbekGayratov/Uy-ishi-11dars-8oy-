import React, { useEffect, useState } from "react";
import { FloatingLabel } from "flowbite-react";

import { Line } from "react-chartjs-2";
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

// Register the necessary chart.js components
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
const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Telefonga ketadigan vaqtim",
    },
  },
};
const data = labels.map((label) => {
  if (
    label === "23:00" ||
    label === "00:00" ||
    label === "01:00" ||
    label === "02:00" ||
    label === "03:00" ||
    label === "04:00" ||
    label === "05:00" ||
    label === "06:00" ||
    label === "07:00" ||
    label === "08:00"
  ) {
    return Math.floor(Math.random() * 1500);
  }
  return Math.floor(Math.random() * 10000);
});
const datasets = [
  {
    label: "Vaqt: 00:00-24:00 (sekund)",
    data: data,
    fill: true,
    tension: 0.2,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
  },
];

export default function Task1() {
  return (
    <div>
      <div className="flex items-center justify-center px-24">
        <Line data={{ labels, datasets }} options={lineChartOptions} />
      </div>
    </div>
  );
}
