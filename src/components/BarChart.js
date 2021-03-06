import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
console.log(Chart);
// import { Chart, Legend, Tooltip, Title } from "chart.js";
// Chart.register(Title, Legend, Tooltip);
// console.log(Chart, Legend, Tooltip, Title);

const BarChart = ({ chartData }) => {
  return (
    <>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                color: "black",
              },
            },
            y: {
              beginAtZero: true,
              min: 0,
              max: 15000,
              ticks: {
                stepSize: 5000,
                color: "black",
              },
            },
          },
          plugins: {
            tooltip: {
              borderColor: "rgba(0, 0, 0, 0.1)",
              borderWidth: "1",
              yAlign: "bottom",
              titleAlign: "center",
              backgroundColor: "white",
              titleColor: "orange",
              bodyColor: "black",
              displayColors: false,
              // callbacks: {
              //   title: (tooltipItems) => {
              //     return;
              //   },
              // },
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
