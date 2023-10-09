import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables, BarElement, BarController, LinearScale, CategoryScale, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { addMonths, startOfMonth, endOfMonth, format } from 'date-fns';
import Button from './Button';

type Booking = {
  x: [string, string],
  y: string
}

type ChartData = Booking[]


class CustomBarElement extends BarElement {
  draw(ctx) {
    const vm = this.getProps(['x', 'y', 'base', 'width', 'height']);
    const halfWidth = vm.width / 2;

    ctx.save();

    ctx.fillStyle = this.options.backgroundColor;
    ctx.strokeStyle = this.options.borderColor;
    ctx.lineWidth = this.options.borderWidth;

    const x = vm.x - halfWidth / 2;
    const y = Math.min(vm.y, vm.base);
    const height = Math.abs(vm.y - vm.base);
    ctx.fillRect(x, y, halfWidth / 2, height);
    ctx.fillRect(vm.x, y, halfWidth / 2, height);

    if (this.options.borderWidth) {
      ctx.strokeRect(x, y, vm.width, height);
    }

    ctx.restore();
  }
}


Chart.register(
  BarController,
  CustomBarElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  ...registerables);

const colorMapping = {}

const GanttChart = (props: { data: any; }) => {
  const canvasRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const chartRef = useRef(null);

  const randomColorGenerator = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.2)`;
  };

  const stringToColor = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const r = (hash & 0xFF0000) >> 16;
    const g = (hash & 0x00FF00) >> 8;
    const b = hash & 0x0000FF;
    return `rgba(${r},${g},${b},0.2)`;
  }

  const getColor = (identifier) => {
    // If the color for this identifier has not been generated before, generate and store it
    if (!colorMapping[identifier]) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colorMapping[identifier] = `rgba(${r},${g},${b},0.2)`;
    }
    // Return the color from the mapping
    return colorMapping[identifier];
  };

  console.log('CALNEDAR', props.data)

  const [chartData, setChartData] = useState<ChartData | null>(null)
  
  

  const todayLinePlugin = {
    id: 'todayLine',
    afterDraw: (chart, args, options) => {
      const ctx = chart.ctx;
      const xAxis = chart.scales.x;
      const yAxis = chart.scales.y;
      const today = new Date();
      if (today < xAxis.min || today > xAxis.max) {
        return;
      }
      const x = xAxis.getPixelForValue(today);
      ctx.save();
      ctx.setLineDash([5, 5]);  // Set line to be dashed with pattern [5, 5]
      ctx.strokeStyle = options.lineColor || 'red';
      ctx.lineWidth = options.lineWidth || 2;
      ctx.beginPath();
      ctx.moveTo(x, yAxis.top);
      ctx.lineTo(x, yAxis.bottom);
      ctx.stroke();
      ctx.restore();
    },
  };
  
  Chart.register(todayLinePlugin);



  useEffect(() => {

    if (!canvasRef.current) {
      // Canvas ref is not yet available, exit early
      return;
  }

    const ctx = canvasRef.current.getContext('2d');

    // Sample data, some of which transition between months
    // const rawData = [
    //   { x: ['2023-10-25', '2023-11-05'], y: 'Apartment 1' },
    //   { x: ['2023-11-06', '2023-11-16'], y: 'Apartment 1' },
    //   { x: ['2023-11-06', '2023-11-16'], y: 'Apartment 2' },
    //   { x: ['2023-11-17', '2023-11-27'], y: 'Apartment 2' },
    //   // ...other data
    // ];
    setChartData(props.data)
    console.log(`Chart data`, chartData)

    if(!props.data) {
      return
    }

    // const rawData = props.data
    const rawData = chartData
    

    // Extract all distinct apartment labels
    const allApartmentLabels = rawData ? Array.from(new Set(rawData.map(booking => booking.y))) : [];


    // Filter data to show only the bookings relevant to the current month
    const filteredData = rawData ? rawData.filter(booking => {
      const [start, end] = booking.x;
      const currentMonthStart = format(startOfMonth(currentMonth), 'yyyy-MM-dd');
      const currentMonthEnd = format(endOfMonth(currentMonth), 'yyyy-MM-dd');
      return (start <= currentMonthEnd && end >= currentMonthStart);
    }) : [];
    

    // const backgroundColors = filteredData.map(() => randomColorGenerator());
    // const backgroundColors = filteredData.map(() => randomColorGenerator());
    // const backgroundColors = filteredData.map(booking => stringToColor(booking.y));
    const backgroundColors = filteredData.map(booking => getColor(`${booking.x}-${booking.y}`));
    const borderColors = backgroundColors.map(color => color.replace('0.2', '1'));

    const minDate = format(startOfMonth(currentMonth), 'yyyy-MM-dd');
    const maxDate = format(endOfMonth(currentMonth), 'yyyy-MM-dd');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: allApartmentLabels,
        datasets: [{
          data: filteredData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
          borderSkipped: false,
          borderRadius: 10,
          barPercentage: 0.75,
        }],
      },
      options: {
        layout: {
          padding: {
            left: 100
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            labels: allApartmentLabels,
          },
          x: {
            position: 'top',
            type: 'time',
            time: {
              unit: 'day',
            },
            min: minDate,
            max: maxDate
          },
        },
        plugins: {
          legend: {
            display: false
          },
          ...({ todayLine: { lineColor: 'rgba(255,0,0,0.5)', lineWidth: 2 } } as any)
        }
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [currentMonth, props.data]);


  if(!props.data) {
    return null
  }

  return (
    <div>
        <div className="flex justify-between mb-4"> {/* This div is the flex container */}
            <Button
                ButtonText="Previous Month"
                ButtonClasses={
                    "flex items-center text-white justify-center max-h-[58px] max-md:py-3"
                }
                ButtonClicked={() => setCurrentMonth(prev => addMonths(prev, -1))}
            />
            <Button
                ButtonText="Next Month"
                ButtonClasses={
                    "flex items-center text-white justify-center max-h-[58px] max-md:py-3"
                }
                ButtonClicked={() => setCurrentMonth(prev => addMonths(prev, 1))}
            />
        </div>
        <canvas ref={canvasRef}></canvas>
    </div>
);

};

export default GanttChart;
