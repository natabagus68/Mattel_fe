import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const DowntimeTrendChart = (props) => {
  const ctx = useRef();
  const chart = useRef();

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "line",
        data: {
          labels: [
            "00.00",
            "01.00",
            "02.00",
            "03.00",
            "04.00",
            "05.00",
            "06.00",
            "07.00",
            "08.00",
            "09.00",
            "10.00",
            "11.00",
            "12.00",
            "13.00",
            "14.00",
            "15.00",
            "16.00",
            "17.00",
            "18.00",
            "19.00",
            "20.00",
            "21.00",
            "22.00",
            "23.00",
          ],
          datasets: [
            {
              label: "quantity",
              data: [
                60, 75, 40, 25, 90, 12, 78, 50, 12, 90, 108, 5, 21, 36, 18, 90,
                89, 20, 70, 80, 28, 9, 23, 76,
              ],
              backgroundColor: [
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
              ],
              borderColor: [
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
                "#10A760",
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
          plugins: {
            title: {
              display: true,
              text: "Summary hours downtime",
              position: "left",
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
          60, 75, 40, 25, 90, 12, 78, 50, 12, 90, 108, 5, 21, 36, 18, 90, 89,
          20, 70, 80, 28, 9, 23, 76,
        ];
        chart.current.update();
      } catch (err) {
        chart.current.destroy();
        initChart();
      }
    }
  }, []);

  return <canvas ref={ctx}></canvas>;
};
