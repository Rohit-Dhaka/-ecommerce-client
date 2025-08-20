import {  createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";


const MyContext = createContext(null)


export const ProviderContext = ({children}) =>{
    const navigate = useNavigate()
    const [isLogin , setIsLogin] = useState(false)


    useEffect(() =>{
        const token = localStorage.getItem("token")
        if(token){
            setIsLogin(true)
        }
    },[])
    
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
            const token = response.data.token 
            localStorage.setItem("token" , token)
            navigate("/home")
        }
        catch(error){
            console.log(error)
        }
    }
    const logout = () =>{
        
        localStorage.removeItem("token");
        setIsLogin(false)
        navigate('/login')

    }
    return(
        <MyContext.Provider value={{ signup ,login , isLogin ,logout}}>
            {children}
        </MyContext.Provider>
    )
}
export const UseMyContext = () => useContext(MyContext)
