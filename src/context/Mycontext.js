import {  createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";


const MyContext = createContext(null)


export const ProviderContext = ({children}) =>{
    const navigate = useNavigate()
    const [isLogin , setIsLogin] = useState(false)
    const [products , setProducts] = useState([])
    const [ cart , setCart] = useState([])  
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [orders, setOrders] = useState([]);
    const [paymentData, setPaymentData] = useState(null);
  
    
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
    const getallproduct = async () =>{
        
        try{
            const token = localStorage.getItem("token")
            const response = await api.get("products/getproduct" ,   { headers:{
                Authorization: `Bearer ${token}`
            }}  )
            console.log(response)
            setProducts(response.data.allproduct)
            
        }
        catch(error){
            console.log(error)
        }
    }
    const getOneproduct = async (id) => {
    try {
        const token = localStorage.getItem("token")
        const response = await api.get(`products/getOneProduct/${id}`, { 
            headers: { Authorization: `Bearer ${token}` } 
        })
        return response.data.oneproduct
    } catch (error) {
        console.log("Get one product error:", error)
        return null
    }
    }
    const addToCart = async (id , data) =>{
  try{
    const token = localStorage.getItem("token")
    const response =  await api.post(`cart/addcart/${id}`, data , {
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    return response.data;
  }
  catch(error){
    console.log("Add to cart error:", error.response?.data || error.message)
  }
    }
    const getCart = async () =>{
        try{
            const token = localStorage.getItem("token")
            const response = await api.get("cart/getcart" , {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })         
                setCart(response.data); 
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
    const removeCart = async (productId) =>{
        const token = localStorage.getItem("token")
        try{
            const response = await api.delete(`cart/removecart/${productId}` , {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            } )
            getCart();
            getCartTotal()
            return response.data;
        }
        catch(error){
            console.log(error)
        }
    }
    const getCartTotal = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("cart/total", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const {  subtotal, shipping, total } = response.data;
      
      setSubtotal(subtotal);
      setShipping(shipping);
      setTotal(total);
    } catch (error) {
      console.log(error);
    }
    };
    const cartLength = async () => {
    const token = localStorage.getItem("token")
    try{
        const response = await api.get("/cart/cartlength" ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
              setCartCount(response.data.length); // total items in cart

        return response.data;


    }
    catch(error){
        console.log(error)
    }
    }
    const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");

  try {
    // decode token
    const decoded = jwtDecode(token);
    const userId = decoded.userId || decoded.id || decoded._id; // depends on your backend payload

    // attach userId to orderData
    const finalData = { ...orderData, userId };

    const response = await api.post("delivery/createdeliver", finalData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
    };
    const getOrder = async () => {
    const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const response = await api.post(
      "/delivery/getuserOrders",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("📦 API Orders Response:", response.data);

    // Always pick the orders array from response
    const ordersData = Array.isArray(response.data.orders)
      ? response.data.orders
      : [];

    setOrders(ordersData);
  } catch (error) {
    console.error("Error fetching orders:", error);
    setOrders([]); // fallback so UI doesn’t break
  }
    };
      const paymentOder = async () => {
    try {
      const token = localStorage.getItem("token"); // auth token
      const res = await api.post(
        "/payment",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPaymentData(res.data);
      return res.data;
    } catch (error) {
      console.error("Create order error:", error);
    }
  };

  const createaddress =  async (data) =>{
    const token = localStorage.getItem("token")
    try{
      const response = await api.post("address/addaddress" , data , {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
       return response.data; 

    }
    catch(error){
      console.log(error)
    }
  }




  
    return(
        <MyContext.Provider value={{ signup ,login , isLogin ,logout , getallproduct , products ,getOneproduct  ,addToCart , getCart ,cart ,removeCart  , getCartTotal  , subtotal , shipping , total , cartCount, cartLength , createOrder , getOrder , orders  , paymentOder , paymentData  , createaddress}}>
            {children}
        </MyContext.Provider>
    )
}
export const UseMyContext = () => useContext(MyContext)
