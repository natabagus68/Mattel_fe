import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const ProblemQuantityChart = (props) => {
  const ctx = useRef();
  const chart = useRef();

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        data: {
          labels: [
            "Line A-01",
            "Line A-02",
            "Line A-03",
            "Line A-04",
            "Line A-05",
            "Line A-06",
            "Line A-07",
            "Line A-08",
            "Line A-09",
            "Line A-10",
          ],
          datasets: [
            {
              type: "bar",
              label: "quantity",
              data: [72, 60, 52, 43, 38, 32, 27, 24, 19, 12],
              backgroundColor: [
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
              ],
              borderColor: [
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
                "#74B816",
              ],
              borderWidth: 1,
              barThickness: 24,
            },
            {
              type: "line",
              label: "quantity",
              data: [72, 75, 79, 82, 85, 88, 90, 92, 97, 100],
              backgroundColor: [
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
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
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
                "#F59F00",
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
          72, 60, 52, 43, 38, 32, 27, 24, 19, 12,
        ];
        chart.current.data.datasets[1].data = [
          72, 75, 79, 82, 85, 88, 90, 92, 97, 100,
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
