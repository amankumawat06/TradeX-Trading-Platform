import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings Price Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="holdings-chart-wrapper">
      <Bar options={options} data={data} />;
    </div>
  );
}
