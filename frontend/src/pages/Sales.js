import React from 'react'
import { BarSales } from '../components/chart/BarSales'
import { LineChartRevenue } from '../components/chart/LineChartRevenue'
import { DoughnutSales } from '../components/chart/DoughnutSales'
import Navbar from '../components/Navbar'

const Sales = () => {

    return <>
        <Navbar />
        <div className="sales">
            <div className="row m-0 ">
                <div className="col-md-4 p-0">
                    <div className="product bg-white shadow-sm rounded p-2 h-specific3 d-flex justify-content-center">
                        <DoughnutSales />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="monthly bg-white shadow-sm rounded p-2 h-100 mt-2 mt-md-0">
                        <BarSales />
                    </div>
                </div>
                <div className="col-md-3 p-0">
                    <div className="headings bg-white shadow-sm rounded p-2 h-100 my-2 my-md-0">
                        <div className="row">
                            <div className="col-">
                                <div className="bg-cyan text-white shadow-sm rounded p-2">
                                    product1
                                </div>
                            </div>
                            <div className="col-">
                                <div className="bg-green text-white shadow-sm rounded p-2 mt-2">
                                    product2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 p-0">
                    <div className="product-sale bg-white shadow-sm rounded h-specific3 p-2 my-2 ">
                        <LineChartRevenue />
                    </div>
                </div>
            </div>
            {/* <div className='row m-0 bg-light'>
                <div className='col-sm-4 bg-grey'>
                    <h2 className='text-center'>Product Sales</h2>
                    <DoughnutSales />
                </div>
                <div className='col-sm-7 bg-grey'>
                    <h2 className='text-center'>Monthly Profit</h2>
                    <BarSales />
                </div>
            </div>
            <div className='row bg-grey mt-5 h-50'>
                <h2 className='text-center'>Revenue</h2>
                <LineChartRevenue />
            </div> */}
        </div>
    </>
}

export default Sales