import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export const DoughnutSales = () => {
    const data = {
        labels: [ 'GOLD', 'SILVER', 'Other' ],
        datasets: [{
            label: 'Product Sale',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
    }
    return <>
        <Doughnut data={data} />
    </>
}
