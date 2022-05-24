import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

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
