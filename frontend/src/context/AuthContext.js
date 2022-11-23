import React, { createContext, useReducer } from "react"
 
export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.command){
        case "LOGIN":{
            return { user: action.payload }
        }
        case "LOGOUT":{
            return { user: null }
        }
        default: {
            return state 
        }
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null
    })
    console.log("AuthContext State : " + state.user)


    return(
        <AuthContext.Provider value={{...state, dispatch}} >
            { children }
        </AuthContext.Provider>
    )
}
