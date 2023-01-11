import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const QuantityChart = (props) => {
  const ctx = useRef();
  const chart = useRef();

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "bar",
        data: {
          labels: [
            "09 Sep",
            "10 Sep",
            "11 Sep",
            "12 Sep",
            "13 Sep",
            "14 Sep",
            "15 Sep",
            "16 Sep",
          ],
          datasets: [
            {
              label: "case(s)",
              data: [60, 75, 40, 25, 90, 12, 78, 50],
              backgroundColor: [
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
              ],
              borderColor: [
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
                "#F8A9A3",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          maintainAspectRatio: false,
        },
      });
    };
    if (!chart.current) {
      initChart();
    } else {
      try {
        chart.current.data.datasets[0].data = [60, 75, 40, 25, 90, 12, 78, 50];
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
