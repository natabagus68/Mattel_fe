import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "../../../../common/components/Chart.js";

export const ResponseChart = ({ data }) => {
  const [label, setLabel] = useState([]);
  const [duration, setDuration] = useState([]);
  const [color, setColor] = useState([]);

  useLayoutEffect(() => {
    setLabel([]);
    setDuration([]);
    setColor([]);
    if (data.length > 0) {
      data.forEach((el) => {
        setLabel((prev) => [...prev, el.name]);
        setDuration((prev) => [...prev, el.responseDuration]);
        setColor((prev) => [...prev, "#72B3F8"]);
      });
    }
  }, [data]);

  const ctx = useRef();
  const chart = useRef();
  useEffect(() => {
    if (label.length === data.length) {
      const initChart = () => {
        chart.current = new Chart(ctx.current, {
          type: "bar",
          data: {
            labels: label,
            datasets: [
              {
                label: "quantity",
                data: duration,
                backgroundColor: color,
                borderColor: color,
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
          chart.current.data.datasets[0].data = duration;
          chart.current.labels = label;
          chart.current.update();
        } catch (err) {
          chart.current.destroy();
          initChart();
        }
      }
    }
  }, [label, duration, color, data]);

  return (
    <div>
      <canvas ref={ctx}></canvas>
    </div>
  );
};
