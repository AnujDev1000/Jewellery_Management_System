import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Spend',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Sold',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const LineChartRevenue = () => {
    return (
        <div className="h-100">
            <Line data={data} className="h-100"  />
        </div>
    )
}
