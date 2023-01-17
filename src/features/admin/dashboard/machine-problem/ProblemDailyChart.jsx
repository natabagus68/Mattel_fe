import { useRef, useEffect } from "react";
import Chart from "../../../../common/components/Chart.js";

export const ProblemDailyChart = (props) => {
  const ctx = useRef();
  const chart = useRef();

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "line",
        data: {
          labels: [
            "2 Sep",
            "3 Sep",
            "4 Sep",
            "5 Sep",
            "6 Sep",
            "7 Sep",
            "8 Sep",
            "9 Sep",
            "10 Sep",
            "11 Sep",
          ],
          datasets: [
            {
              label: "quantity",
              data: [60, 75, 40, 25, 90, 12, 78, 50, 12, 90],
              backgroundColor: [
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
              ],
              borderColor: [
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
                "#229BD8",
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
          60, 75, 40, 25, 90, 12, 78, 50, 12, 90,
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
