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
function formatLabels(list) {
  return list.map(e=>{
    return e.charAt(0).toUpperCase()+e.slice(1);
  })
};

const BarChart = ({ labels, Data }) => {
  const formattedLabels=formatLabels(labels);
    const data = {
      labels: formattedLabels,
      datasets: [
        {
          backgroundColor: ['rgba(163, 15, 217,0.2)','rgba(50, 168, 82,0.2)', 'rgba(217, 19, 15,0.5)','rgba(217, 150, 15,0.2)','rgba(204, 255, 153,0.2)'],
          borderColor:['rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'],
          borderWidth:1,
          data: Data,
        },
      ],
      };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        }
      },
     plugins:{legend: {
          display: false
        }
      },
      label:{
        display:false
      }  
    };
  
    return (
      <div className='d-d-flex d-jc-center d-ai-center'>
      <div className='d-ta-center' style={{width:"50vw",height:"50vh",textAlign:"center",marginTop:'2%'}}>
        <Bar data={data} options={options} />
      </div>
      </div>
    );
    };
  
  export default BarChart;