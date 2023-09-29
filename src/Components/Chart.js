import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  };

 export const data={
    labels:["Complete","Proces","Incomplete"],
    datasets:[
        {
            label:'done',
            data:[40,13,12],
            backgroundColor: 'lightGreen'
        },
        {
            label:"ongoing",
            data:[2,4,6],
            backgroundColor:"rgba(255, 99, 132, 0.5)"
        },
    ], 
};

export default function Chart() {
  return <div style={{width:800, height:800}}>
    <Bar options={options} data={data} />
    </div>;
}




