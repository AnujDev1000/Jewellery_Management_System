import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export const BarSales = () => {
    const [yearData, setyearData] = useState([
        {month: "Jan",product: 5}, 
        {month: "Feb",product: 6}, 
        {month: "Mar",product: 7}, 
        {month: "Apr",product: 2}, 
        {month: "May",product: 1}, 
        {month: "Jun",product: 8}
    ])
    const data = {
        labels: yearData.map(item => item.month),
        datasets: [{
            label: 'Monthly Products Sale',
            data: yearData.map(item => item.product),
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },],
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    return <>
        <Bar data={data} />
    </>
}
