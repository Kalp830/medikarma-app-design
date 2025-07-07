import React, { useEffect, useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import './RadarChartWithLabels.css';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  elements
} from 'chart.js';
import './RadarChartWithLabels.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
   Tooltip,
  Legend
);

const RadarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['sleep', 'resilience', 'activity', 'calm', 'readiness', 'cardiac'],
    datasets: [
      {
        label: 'Outline',
        data: [70, 50, 60, 90, 50, 80],
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        tension: 0.2,
      },
      {
        label: 'Gradient',
        data: [90, 80, 60, 70, 80, 90],
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return null;
          const gradient = ctx.createRadialGradient(
            chartArea.width / 2 + chartArea.left,
            chartArea.height / 2 + chartArea.top,
            0,
            chartArea.width / 2 + chartArea.left,
            chartArea.height / 2 + chartArea.top,
            chartArea.width / 1.5
          );
          gradient.addColorStop(0, 'rgba(176, 30, 255, 0.7)');
          gradient.addColorStop(0.5, 'rgba(5, 204, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(5, 204, 255, 0.2)');
          return gradient;
        },
        borderColor: '#FF00F4',
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        tension: 0.10,
      },
      {
        label: 'Ghost',
        data: [90, 90, 60, 50, 60, 75],
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        tension: 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      },
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        startAngle: 90, // <-- This rotates the entire radar grid 90 degrees
        
        ticks: { 
          display: false,
          stepSize: 50
        },
        grid: { 
          color: 'rgba(255, 255, 255, 0.3)',
          lineWidth: 1,
         
        },
        angleLines: { 
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        },
        pointLabels: {
          color: '#ffffff',
          font: { 
            size: 14,
            weight: 'normal',
      
          },
          padding: 30
        }
      }
    },
    plugins: {
      legend: { display: false }
    },

  };

  return (
    <div className="radar-wrapper">
      <div className="chart-container">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;