import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const SideBarChart = () => {
  const ctx = useRef();
  const chart = useRef();

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "bar",
        data: {
          labels: [
            "Line A-01",
            "Line A-02",
            "Line A-03",
            "Line A-04",
            "Line A-05",
          ],
          datasets: [
            {
              label: "quantity",
              data: [12, 60, 52, 43, 24, 9],
              backgroundColor: [
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
              ],
              borderColor: [
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
              ],
              borderWidth: 1,
              barThickness: 12,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          indexAxis: "y",
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        },
      });
    };
    if (!chart.current) {
      initChart();
    } else {
      try {
        chart.current.data.datasets[0].data = [12, 60, 52, 43, 24, 9];
        chart.current.update();
      } catch (err) {
        chart.current.destroy();
        initChart();
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={ctx}></canvas>
    </div>
  );
};
