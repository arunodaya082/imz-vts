import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'Red',
  'Blue',
  'Yellow'
],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#F64C11',
        '#168ad8',
        '#ffbf23',
        '#4bc0c0',
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff',
        '#fff',
       
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart=()=> {
  return <Pie data={data} />;
}


export default PieChart;