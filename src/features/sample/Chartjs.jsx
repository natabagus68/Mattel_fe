import React, { useEffect, useRef, useState } from "react";
import Chart from "../../common/components/Chart.js";

export const ChartJs = () => {
  const ctx = useRef();
  const chart = useRef();
  const [blue, setBlue] = useState(12);

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "line",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [20, blue, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };
    if (!chart.current) {
      initChart();
    } else {
      try {
        chart.current.data.datasets[0].data = [20, blue, 3, 5, 2, 3];
        chart.current.update();
      } catch (e) {
        chart.current.destroy();
        initChart();
      }
    }
  }, [blue]);

  return (
    <>
      <div>Dashboard</div>
      <div className="">
        <canvas ref={ctx}></canvas>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setBlue((blue) => blue + 1)}
          className="rounded bg-green-500 text-white px-4 py-2"
        >
          Icrement Blue
        </button>
        <button
          onClick={() => setBlue((blue) => blue - 1)}
          className="rounded bg-green-500 text-white px-4 py-2"
        >
          Decrement Blue
        </button>
      </div>
    </>
  );
};
