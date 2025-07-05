
import React, { useRef, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
  Legend
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const DashboardScreen = () => {
  /************ Line-chart dataset (balance curve) ************/
  const lineChartRef = useRef(null);

  // Build gradients once, lazily, with useMemo
  const lineChartData = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Border gradient
    const strokeGrad = ctx.createLinearGradient(0, 0, 400, 0);
    strokeGrad.addColorStop(0, '#06b6d4');  // cyan-ish
    strokeGrad.addColorStop(1, '#a855f7');  // violet

    // Area fill gradient
    const areaGrad = ctx.createLinearGradient(0, 0, 0, 300);
    areaGrad.addColorStop(0, 'rgba(168,85,247,0.4)');   // top
    areaGrad.addColorStop(1, 'rgba(3,105,161,0.0)');    // bottom (transparent)

    return {
      labels: months,
      datasets: [
        {
          data: [5, 20, 15, 30, 45],
          tension: 0.4,
          fill: 'start',
          backgroundColor: areaGrad,
          borderColor: strokeGrad,
          borderWidth: 3,
          pointRadius: 0
        }
      ]
    };
  }, []);

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { intersect: false, mode: 'index' }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 11 } }
      },
      y: {
        display: false,
        min: 0,
        max: 50
      }
    }
  };

  /************ Bar-chart dataset (category spending) ************/
  const barChartData = useMemo(() => {
    return {
      labels: months,
      datasets: [
        {
          data: [12, 25, 20, 28, 16],
          borderRadius: 6,
          barPercentage: 0.5,
          backgroundColor: ctx => {
            const grad = ctx.chart.ctx.createLinearGradient(0, 0, 0, 160);
            grad.addColorStop(0, '#3b82f6');
            grad.addColorStop(1, '#a855f7');
            return grad;
          }
        }
      ]
    };
  }, []);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { intersect: false } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b', font: { size: 11 } }
      },
      y: { display: false, min: 0, max: 30 }
    }
  };

  return (
    <>    
     {/* ── Navigation icons ───────────────────────────── */}
        <div className="flex justify-between items-center text-xl bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] p-2">
          <IoChevronBack />
          <IoChevronForward />
        </div>
     <div className="flex items-center justify-center bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
        <div className='min-h-screen '>
      <div className="w-full max-w-xs text-white relative">
        {/* ── Profile + greeting ─────────────────────────── */}
        <div className="mt-6 flex items-center space-x-10">
          {/* Gradient ring avatar */}
          <div className="shrink-0 p-0.5 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#a855f7]">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-xl opacity-60">👤</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-300">Welcome back!</p>
            <h2 className="font-semibold -mt-1">Thomas</h2>
          </div>
        </div>

        {/* ── Balance headline ───────────────────────────── */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Balance
          </p>
          <h1 className="text-4xl font-semibold">$70,250</h1>
        </div>

        {/* ── Last-30-days stat ──────────────────────────── */}
        <p className="mt-4 text-sm text-cyan-400">
          Last 30 days <span className="text-white">+5.27%</span>
        </p>

        {/* ── Line chart ─────────────────────────────────── */}
        <div className="relative mt-6 h-40">
          <Line ref={lineChartRef} data={lineChartData} options={lineOptions} />
          {/* little purple pill on the last point */}
          <div className="absolute right-0 bottom-[55%] translate-y-1/2 bg-fuchsia-500/80 text-xs px-2 py-1 rounded-full">
            $20.3k
          </div>
          <div className="absolute right-[36px] bottom-0 h-full border-dashed border-r border-white/40 pointer-events-none" />
        </div>

        {/* ── Bar chart ──────────────────────────────────── */}
        <div className="h-28 mt-6">
          <Bar data={barChartData} options={barOptions} />
        </div>

      </div>
        </div>
    </div>
    </>

  );
};

export default DashboardScreen;
