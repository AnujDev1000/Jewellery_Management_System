import React from 'react'
import { FaLayerGroup } from "react-icons/fa"
import { Link } from 'react-router-dom'
import randomColor from '../utils/randomColor'



const Home = () => {
    const menus = ["Products", "Purchase","Sales","Categories", "Stocks", "Employees" , "Suppliers", "Orders",]
    let index = 0
    let classValue = ""
    return (
        <div className="home">
            <div className="menus p-sm-4 bg-white rounded shadow-sm m-2">
                <div className="row justify-content-center m-0">
                    {menus.map((menu) => {
                        if(index < 4){ 
                            classValue = randomColor(index) 
                            index++
                        }
                        else { 
                            index = 0
                            classValue = randomColor(index)
                            index++
                        }
                        return(
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-2">
                                <Link to={"/" + menu.toLowerCase()} className="text-decoration-none">
                                    <div className={classValue}>
                                        <FaLayerGroup className="fs-big my-2" />
                                        <span className="my-2 text-uppercase fw-bold">{ menu }</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home

