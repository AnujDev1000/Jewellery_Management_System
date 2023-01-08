
const reducer = (type, payload, state, setState) => {
    switch (type) {
        case "ADD_PRODUCTS":{
            setState({...state, products: state.products.push(payload)})
            break;
        }
        case "DELETE_PRODUCTS":{
            const index = state.products.findIndex(product => product._id === payload._id)
            setState({
                    ...state,
                    products: state.products.splice(index, 1)
            })
            break;
        }
        case "UPDATE_PRODUCTS":{
            const index = state.products.findIndex(product => product._id === payload._id)
            state.products[index] = payload
            break;
        }
        case "UPDATE_ORDER":{
            const index = state.orders.findIndex(order => order._id === payload._id)
            state.orders[index].status = payload.status
            break;
        }
        case "ADD_ORDER":{
            setState({...state, orders: state.orders.push(payload)})
            break;
        }
        case "ADD_PURCHASE":{
            setState({...state, purchases: state.purchases.push(payload)})
            break;
        }
        case "UPDATE_DELETE_STOCKS":{
            payload.map(product => {
                const index = state.stocks.findIndex(stock => stock.product._id === product._id)
                state.stocks[index].availableStock -= product.count
                return product
            })
            break;
        }
        case "UPDATE_ADD_STOCKS":{
            payload.map(product => {
                const index = state.stocks.findIndex(stock => stock.product._id === product._id)
                state.stocks[index].availableStock += product.count
                return product
            })
            break;
        }
        case "ADD_STOCKS":{
            setState({...state, stocks: state.stocks.push(payload)})
            break;
        }
        case "DELETE_STOCKS":{
            const index = state.stocks.findIndex(stock => stock.product._id === payload._id)
            setState({
                ...state,
                stocks: state.stocks.splice(index, 1)
            })
            break;
        }
        case "UPDATE_USER":{
            const index = state.users.findIndex(user => user._id === payload._id)
            state.users[index] = payload
            break;
        }
        case "DELETE_USER":{
            const index = state.users.findIndex(user => user._id === payload._id)
            setState({
                    ...state,
                    users: state.users.splice(index, 1)
            })
            break;
        }
        case "ADD_CATEGORY":{
            setState({...state, categories: state.categories.push(payload)})
            break;
        }
        case "UPDATE_ADD_CATEGORIES":{
            const index = state.categories.findIndex(category => category._id === payload.category._id)
            state.categories[index].products.push({ _id: payload._id, name: payload._id})
            state.categories[index].productCount += 1
            break;
        }
        case "UPDATE_DELETE_CATEGORIES":{
            const index = state.categories.findIndex(category => category._id === payload.category._id)
            const pi = state.categories[index].products.findIndex(product => product._id === payload._id)
            state.categories[index].productCount -= 1
            state.categories[index].products.splice(pi, 1)
            break;
        }
        case "ADD_SUPPLIER":{
            setState({...state, suppliers: state.suppliers.push(payload)})
            break;
        }
        case "UPDATE_ADD_SUPPLIERS":{
            const index = state.suppliers.findIndex(supplier => supplier._id === payload.supplier._id)
            state.suppliers[index].products.push({ _id: payload._id, name: payload._id})
            state.suppliers[index].productCount += 1
            break;
        }
        case "UPDATE_DELETE_SUPPLIERS":{
            const index = state.suppliers.findIndex(supplier => supplier._id === payload.supplier._id)
            const pi = state.suppliers[index].products.findIndex(product => product._id === payload._id)
            state.suppliers[index].productCount -= 1
            state.suppliers[index].products.splice(pi, 1)
            break;
        }
        case "DELETE_SUPPLIER":{
            const index = state.suppliers.findIndex(supplier => supplier._id === payload._id)
            setState({
                    ...state,
                    suppliers: state.suppliers.splice(index, 1)
            })
            break;
        }
        case "ADD_EMPLOYEE":{
            setState({...state, employees: state.employees.push(payload)})
            break;
        }
        case "DELETE_EMPLOYEE":{
            const index = state.employees.findIndex(employee => employee._id === payload._id)
            setState({
                    ...state,
                    employees: state.employees.splice(index, 1)
            })
            break;
        }
        case "ERRORS":{
            setState({...state, errors: state.errors.push(payload)})
            break;
        }
     
        default:
            break;
    }
}

export default reducer
