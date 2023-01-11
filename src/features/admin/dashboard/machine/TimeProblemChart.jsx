import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const TimeProblemChart = (props) => {
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
              label: "minute(s)",
              data: [210, 224, 180, 20, 100, 216, 80, 240],
              backgroundColor: [
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
              ],
              borderColor: [
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
                "#72B3F8",
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
        chart.current.data.datasets[0].data = [
          210, 224, 180, 20, 100, 216, 80, 240,
        ];
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
