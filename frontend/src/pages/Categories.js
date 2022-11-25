import React from 'react'

const Categories = () => {
    const tabs = ["Categories", "Highest", "Gold", "Silver"]
    

    return (
        <div className="categories">
            <div className="display-tabs">
                <div className="row m-0">
                    {tabs.map(tab => {
                        return (
                            <div className="col-6 col-md-3 p-2 h-100">
                                <div className="tabs bg-melon text-white rounded shadow-sm p-2 h-100">
                                    <h4>{tab.toUpperCase()}</h4>
                                    <h2>0</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="category-table table-responsive p-2">
            <table class="table table-bordered">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Edits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined button group">
                                  <button type="button" class="btn btn-outline-primary">U</button>
                                  <button type="button" class="btn btn-outline-primary">D</button>
                                  <button type="button" class="btn btn-outline-primary">A</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined button group">
                                  <button type="button" class="btn btn-outline-primary">U</button>
                                  <button type="button" class="btn btn-outline-primary">D</button>
                                  <button type="button" class="btn btn-outline-primary">A</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories
