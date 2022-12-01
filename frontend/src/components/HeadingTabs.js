import React from 'react'

const HeadingTabs = ({tab,loading}) => {
    return (
        <div className="col-6 col-md-3 p-2 h-100">
            <div className="tabs bg-light-cyan rounded shadow-sm p-2 h-100">  
                <h4 className="text-uppercase fw-bold">{tab.name}</h4>
                {loading ? <div className="spinner-border spinner-border-sm" role="status"></div> 
                        : <h2>{tab.value}</h2>  
                }
            </div>
        </div>
    )
}

export default HeadingTabs
