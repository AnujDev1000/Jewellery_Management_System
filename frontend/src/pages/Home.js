import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Rates from '../components/Rates'
import Navbar from '../components/Navbar'
import { homeMenu } from '../utils/headingData'
import randomColor from '../utils/randomColor'
import { AuthContext } from '../context/AuthContext'
import { Context } from '../context/Context'


const Home = () => {
    const { user } = useContext(AuthContext)

    const menus = homeMenu()
    let index = 0
    let classValue = ""
    return (
        <>
            <Navbar />
            <div className="home my-2">
                <div className="row">
                    <div className="col-*">
                        <Rates />
                    </div>
                    <div className="col-* menus mt-4">
                        <div className="row justify-content-center p-1">
                            <div className="col-*">
                                <span className="text-secondary fw-bold letter-spacing my-2 mt-4">DASHBOARD</span>
                            </div>
                            {menus.map((menu,i) => {
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
                                    <div key={i} className="col-6 col-sm-4 col-md-3 p-2">
                                        <Link to={"/" + menu.name} className="text-decoration-none">
                                            <div className={classValue}>
                                                <span className="fs-big">{menu.icon}</span>
                                                <span className="my-2 text-uppercase fw-bold">{ menu.name }</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

