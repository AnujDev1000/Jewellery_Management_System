import React from 'react'

 
const HeadingTabs = ({tab,loading}) => {
    return (
        <div className="col-6 col-md-3 p-2 h-100">
            <div className="tabs bg-light-cyan rounded shadow-sm p-2">  
                    <span className="text-uppercase fw-bold">{tab.name}</span>
                    {loading ? <div className="spinner-border spinner-border-sm text-white" role="status"></div> 
                            : <h2 className="text-uppercase m-0 fw-bold text-white">{tab.value}</h2>  
                    }
            </div>
        </div>
    )
}

export default HeadingTabs
