
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

function TrafficAnalysis() {

    const datasetValues = [
        {
            label: 'Web',
            value: 70,
            backgroundColor: '#465E95'
        },
        {
            label: 'Email',
            value: 20,
            backgroundColor: '#6786CC'
        },
        {
            label: 'Phone',
            value: 10,
            backgroundColor: '#31446F'
        },
    ]

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: datasetValues.map((data) => data.label),
            datasets: [
                {
                    data: datasetValues.map((data) => data.value),
                    backgroundColor: datasetValues.map((data) => data.backgroundColor),
                },
            ]
        };
        const options = {
            plugins: {
                legend: {
                    display: false,
                },
            },
            cutout: '70%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className='w-full min-w-[490px]'>
            <div className='dashboard-card-label'>Traffic Analysis</div>
           <div className='dashboard-card-container'>
           <div className="flex justify-center items-center mb-4">
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-[200px]" />
            </div>
            <div >
                <ul className="flex justify-between items-center">
                    {datasetValues.map((data, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <div className="w-4 h-4" style={{ backgroundColor: data.backgroundColor }}></div>
                            <div>{data.label}</div>
                            <div>({data.value})</div>
                        </li>
                    ))}
                </ul>
            </div>
           </div>
        </div>
    )
}

export default TrafficAnalysis