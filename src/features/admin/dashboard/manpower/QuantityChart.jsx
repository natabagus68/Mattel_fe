import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "../../../../common/components/Chart.js";
import moment from "moment";

export const QuantityChart = ({ data, month }) => {
  const [label, setLabel] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [color, setColor] = useState([]);

  const ctx = useRef();
  const chart = useRef();

  useLayoutEffect(() => {
    setLabel([]);
    setQuantity([]);
    setColor([]);
    if (data.length > 0) {
      data.forEach((el) => {
        setLabel((prev) => [...prev, `${el.day} ${moment.monthsShort(month)}`]);
        setQuantity((prev) => [...prev, el.ticketCount]);
        setColor((prev) => [...prev, "#F8A9A3"]);
      });
    }
  }, [data]);

  useEffect(() => {
    if (label.length > 0 && quantity.length > 0) {
      const initChart = () => {
        chart.current = new Chart(ctx.current, {
          type: "bar",
          data: {
            labels: label,
            datasets: [
              {
                label: "case(s)",
                data: quantity,
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
          chart.current.data.datasets[0].data = quantity;
          chart.current.update();
        } catch (err) {
          chart.current.destroy();
          initChart();
        }
      }
    }
  }, [label, quantity]);

  return (
    <div>
      <canvas ref={ctx}></canvas>
    </div>
  );
};
