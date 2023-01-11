import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const ProblemTimeChart = (props) => {
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
              data: [54, 60, 24, 80, 72, 19, 33, 17, 88, 90],
              backgroundColor: [
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
              ],
              borderColor: [
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
                "#F5827A",
              ],
              borderWidth: 1,
              barThickness: 24,
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
          54, 60, 24, 80, 72, 19, 33, 17, 88, 90,
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
