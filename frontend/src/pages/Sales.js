import React from 'react'
import { BarSales } from '../components/chart/BarSales'
import { LineChartRevenue } from '../components/chart/LineChartRevenue'
import { DoughnutSales } from '../components/chart/DoughnutSales'
import { AiFillCodeSandboxSquare } from "react-icons/ai"
import Navbar from '../components/Navbar'

const Sales = () => {

    return <>
        <Navbar />
        <div className="sales">
            <div className="row m-0">
                <div className="col-lg-4 order-1">
                    <div className="product bg-white shadow-sm rounded p-2 my-1 my-md-0 h-specific3 w-100 d-flex justify-content-center">
                        <DoughnutSales />
                    </div>
                </div>
                <div className="col-lg-3 order-0 order-md-2">
                    <div className="heading p-2 my-1 my-md-0 h-100 d-flex flex-column align-items-center justify-content-center">
                        <AiFillCodeSandboxSquare className="fs-big-1 text-center text-cyan w-100" />
                        <h1 className="fw-bold fs-1 text-center text-cyan text-uppercase">Balaji Jewellers</h1>
                    </div>
                </div>
                <div className="col-lg-5 mb-2 mb-md-0 order-3">
                    <div className="monthly bg-white shadow-sm rounded p-2 my-1 my-md-0 h-100">
                        <BarSales />
                    </div>
                </div>
                <div className="col-* order-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="product-sale bg-white shadow-sm rounded h-specific3 p-2 my-3 my-md-2 h-100">
                                <LineChartRevenue  />
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2 mt-md-0">
                            <div className="headings bg-white shadow-sm rounded d-flex flex-column p-2 my-3 my-md-2 h-100">
                                <div className="bg-cyan text-white flex-1 h-100 d-flex align-items-center justify-content-center shadow-sm rounded">
                                    <h3 className="fw-bold">Product</h3>
                                </div>
                                <div className="bg-green text-white flex-1 h-100 d-flex align-items-center justify-content-center shadow-sm rounded mt-2">
                                    <h3 className="fw-bold">Product</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Sales