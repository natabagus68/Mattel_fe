import { useEffect, useRef } from "react";
import Chart from "../../../../common/components/Chart.js";

export const ResponseChart = (props) => {
  const ctx = useRef();
  const chart = useRef();
  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "bar",
        data: {
          labels: [
            "Asep",
            "Adi",
            "Agung",
            "Annas",
            "Ferdi",
            "Kiki",
            "Solihin",
            "Dwiki",
            "Darmawan",
          ],
          datasets: [
            {
              label: "quantity",
              data: [224, 20, 60, 148, 276, 160, 286, 50, 120],
              backgroundColor: [
                "#72B3F8",
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
                "#72B3F8",
              ],
              borderWidth: 1,
              // maxBarThickness: 3,
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
          224, 20, 60, 148, 276, 160, 286, 50, 120,
        ];
        chart.current.update();
      } catch (err) {
        chart.current.destroy();
        initChart();
      }
    }
  }, []);

  return (
    // <>
    <div>
      <canvas ref={ctx}></canvas>
    </div>
    // </>
  );
};
