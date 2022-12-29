import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export const BarSales = () => {
    const [yearData, setyearData] = useState([
        {year: 2012,profit: 500}, 
        {year: 2013,profit: 600}, 
        {year: 2016,profit: 700}, 
        {year: 2015,profit: 200}, 
        {year: 2022,profit: 100}, 
        {year: 2023,profit: 800}
    ])
    const data = {
        labels: yearData.map(item => item.year),
        datasets: [{
            label: 'Total Profit Monthly',
            data: yearData.map(item => item.profit),
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
