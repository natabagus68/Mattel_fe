import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "../../../../common/components/Chart.js";
import moment from "moment";

export const TimeChart = ({ data, month }) => {
  const [label, setLabel] = useState([]);
  const [duration, setDuration] = useState([]);
  const [color, setColor] = useState([]);

  const ctx = useRef();
  const chart = useRef();

  useLayoutEffect(() => {
    setLabel([]);
    setDuration([]);
    setColor([]);
    if (data.length > 0) {
      data.forEach((el) => {
        setLabel((prev) => [...prev, `${el.day} ${moment.monthsShort(month)}`]);
        setDuration((prev) => [...prev, el.duration]);
        setColor((prev) => [...prev, "#FAB55A"]);
      });
    }
  }, [data]);

  useEffect(() => {
    if (label.length > 0) {
      const initChart = () => {
        chart.current = new Chart(ctx.current, {
          type: "bar",
          data: {
            labels: label,
            datasets: [
              {
                label: "minute(s)",
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
          chart.current.update();
        } catch (err) {
          chart.current.destroy();
          initChart();
        }
      }
    }
  }, [label, duration]);

  return (
    <div>
      <canvas ref={ctx}></canvas>
    </div>
  );
};
