import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function ComboBarGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // const documentStyle = getComputedStyle(document.documentElement);
        // const textColor = documentStyle.getPropertyValue('--text-color');
        // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [

                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#6786CC',
                    data: [5, 15, 20, 25, 33, 14, 20],
                    order: 1,
                    z: 1, 
                },
                {
                    type: 'bar',
                    label: 'Dataset 4',
                    backgroundColor: '#31446F',
                    data: [15, 19, 30, 35, 39, 34, 22],
                    order: 2,
                    z: 2, 
                },
                {
                    type: 'line',
                    label: 'Line Dataset',
                    borderColor: '#22C55E',
                    borderWidth: 2,
                    pointRadius: 5, // Make points visible
                    fill: false,
                    tension: 0.4,
                    data: [5, 9, 20, 15, 29, 24, 12],
                    order: 3,
                    z: 100, // Ensure the line is on top of the bars
                },
            ],
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                  display: false,
                },
            },
            elements: {
                line: {
                    z: 10, // Ensure the line is rendered on top
                },
                point: {
                    z: 11, // Ensure points are on top of everything
                },
            },
            scales: {
                x: {
                    stacked: true, // Enable stacking on the X-axis
                    ticks: {
                        color: '#000000',
                    },
                    grid: {
                        drawOnChartArea: false, // Ensures grid lines are drawn
                        drawTicks: false,
                        color: '#DBDBDB',
                    },
                   
                },
                
                y: {
                    stacked: false, // Enable stacking on the Y-axis
                    ticks: {
                        color: '#000000',
                    },
                    grid: {
                        drawOnChartArea: true, // Ensures grid lines are drawn
                        drawTicks: true,
                        color: '#DBDBDB',
                    },
                },
            },
            categoryPercentage: 0.6, // Adjust bar category width
            barPercentage: 0.6, // Adjust individual bar width
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
            
        </div>
    );
}
