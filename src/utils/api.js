import axios from "axios";


export const api = axios.create({
    baseURL:  'http://localhost:4000/api/v1'    
    // baseURL :'https://ecommerce-backend-i2vr.onrender.com/api/v1'
})


api.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})


