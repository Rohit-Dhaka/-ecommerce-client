import {  createContext, useContext } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";


const MyContext = createContext(null)


export const ProviderContext = ({children}) =>{
    const navigate = useNavigate()
    
    const signup = async (data) =>{
        try{
            const response = await api.post("auth/signup" , data)
            console.log(response)
            navigate('/login')

        }
        catch(error){
            console.log("Signup error" , error)
        }
    }
    const login = async (data) =>{
        try{
            const response = await api.post('auth/login' , data)
            console.log(response)
            navigate("/home")

        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <MyContext.Provider value={{ signup ,login}}>
            {children}
        </MyContext.Provider>
    )
}
export const UseMyContext = () => useContext(MyContext)
