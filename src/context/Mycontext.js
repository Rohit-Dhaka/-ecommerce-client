import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const MyContext = createContext(null);

export const ProviderContext = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [paymentData, setPaymentData] = useState(null);
  const [user, setUser] = useState(null);
  const [allorders, setAllorders] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      
      const response = await api.get("auth/getuser", );
      setUser(response.data.user); 
    } catch (error) {
      console.log(error);
    }
  };

const signup = async (data) => {
  try {
    const response = await api.post("auth/signup", data);
    return response.data;
  } catch (error) {
    console.log("Signup error", error);

    
    throw error.response?.data || { message: "Signup failed" };
  }
};

// const addPayment = async (data) => {
//   try {
//     const response = await api.post("delivery/addpayment", data);
//     return response.data;
//   } catch (error) {
//     console.log("Add Payment Error:", error);
//     throw error;
//   }
// };



  const login = async (data) => {
    try {
      const response = await api.post("auth/login", data);
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("token", token);
      return response.data      
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };
  const getallproduct = async () => {
    try {
      
      const response = await api.get("products/getproduct", );
      console.log(response);
      setProducts(response.data.allproduct);
    } catch (error) {
      console.log(error);
    }
  };
  const getOneproduct = async (id) => {
    try {
      
      const response = await api.get(`products/getOneProduct/${id}`);
      return response.data.oneproduct;
    } catch (error) {
      console.log("Get one product error:", error);
      return null;
    }
  };
  const addToCart = async (id, data) => {
    try {
      
      const response = await api.post(`cart/addcart/${id}`, data, );
      return response.data;
    } catch (error) {
      console.log("Add to cart error:", error.response?.data || error.message);
      return error.response?.data
    }
  };
  const getCart = async () => {
    try {
      
      const response = await api.get("cart/getcart", );
      setCart(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const removeCart = async (productId) => {
    
    try {
      const response = await api.delete(`cart/removecart/${productId}`,);
      getCart();
      getCartTotal();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getCartTotal = async () => {
    
    try {
      const response = await api.get("cart/total", );
      const { subtotal, shipping, total } = response.data;

      setSubtotal(subtotal);
      setShipping(shipping);
      setTotal(total);
    } catch (error) {
      console.log(error);
    }
  };
  const cartLength = async () => {
    
    try {
      const response = await api.get("/cart/cartlength",);
      setCartCount(response.data.length); 

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const createOrder = async (orderData) => {
    

    try {
      
      const token = localStorage.getItem("token")
      const decoded = jwtDecode(token);
      const userId = decoded.userId || decoded.id || decoded._id; 

      
      const finalData = { ...orderData, userId };

      const response = await api.post("delivery/createdeliver", finalData, );

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getOrder = async () => {
    const token  = localStorage.getItem(token)
    if (!token) return;

    try {
      const response = await api.post(
        "/delivery/getuserOrders",
        {},
      
      );

      console.log("📦 API Orders Response:", response.data);

      
      const ordersData = Array.isArray(response.data.orders)
        ? response.data.orders
        : [];

      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]); 
    }
  };
 const paymentcreateOrder = async (data) => {
  try {
    

    const res = await api.post("/delivery/addpayment", data);

    setPaymentData(res.data);
    return res.data;

  } catch (error) {
     console.error("Create order error:", error);
  console.log("Backend says:", error.response?.data);
  }
};


  const createaddress = async (data) => {
    
    try {
      const response = await api.post("address/addaddress", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getallorder = async () =>{
    try{
      const response = await api.get('order/getorder')
      
      setAllorders(response.data.orders)

    }
    catch(error){
      console.log(error)
    }
  }
 const incrementQty = async (productId) => {
    try {
      const response = await api.put(`/cart/cartupdate/${productId}`, {
        action: "inc",
      });

      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: response.data.quantity }
            : item
        )
      );
      getCartTotal()
    } catch (error) {
      console.log(error);
    }
  };

  
  const decrementQty = async (productId) => {
    try {
      const response = await api.put(`/cart/cartupdate/${productId}`, {
        action: "dec",
      });

      if (response.data.message === "Product removed from cart") {
        
        setCart((prev) => prev.filter((item) => item.productId !== productId));
      } else {
        
        setCart((prev) =>
          prev.map((item) =>
            item.productId === productId
              ? { ...item, quantity: response.data.quantity }
              : item
          )
        );
      }
      getCartTotal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        incrementQty,
        decrementQty,
        getallorder,
        allorders,
        signup,
        login,
        isLogin,
        logout,
        getallproduct,
        products,
        getOneproduct,
        addToCart,
        getCart,
        cart,
        removeCart,
        getCartTotal,
        subtotal,
        shipping,
        total,
        cartCount,
        cartLength,
        createOrder,
        getOrder,
        orders,
        paymentData,
        createaddress,
        paymentcreateOrder,
        fetchUser,
        user,
        // addPayment
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export const UseMyContext = () => useContext(MyContext);
