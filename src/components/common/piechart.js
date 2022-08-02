import React from "react";
import CanvasJSReact from "./chart/canvas.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PieChart() {
  const options = {
    animationEnabled: true,
    //exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Pie Chart in React - CanvasJS"
    },
    data: [
      {
        type: "pie",
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 }
        ]
      }
    ]
  };
  const containerProps = {
    height: "300px",
    width: "300px",
    border: "1px solid black"
  };
  return (
    <div className="App">
      <CanvasJSChart containerProps={containerProps} options={options} />
    </div>
  );
}


export default PieChart;