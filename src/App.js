import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Subscribe from './components/layout/Subscribe';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Contactpage from './pages/contact/contactpage';
import AboutPage from './pages/About/AboutPage';
import Myorders from './components/layout/Myorders';
import Orderspage from './pages/Orders/Orderspage';
import Cartpage from './pages/Cart/Cartpage';
import DeliveryInformation from './components/forms/DeliveryInformation';
import Homepage from './pages/Home/Homepage';
import Productdetailspage from './pages/ProductDetails/Productdetailspage';
import Paymet from './components/forms/Paymet';
import CartTotal from './components/forms/CartTotal';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <LoginForm/> */}
      {/* <SignupForm/> */}
      {/* <About/> */}
      {/* <Subscribe/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
{/* <DeliveryInformation/> */}
      <Routes>
        <Route path='/login'  element={<Login/>} />
        <Route path='/signup'  element={<Signup/>} />
        <Route index  element={<Homepage/>} />
        <Route path='/home'  element={<Homepage/>} />
        <Route path='/about'  element={<AboutPage/>} />
        <Route path='/contact'  element={<Contactpage/>} />
        <Route path='/orders'  element={<Orderspage/>} />
        <Route path='/cart'  element={<Cartpage/>} />
        <Route path='/productdetails/:id'  element={<Productdetailspage/>} />
        <Route path='/deliveryInformation'  element={<DeliveryInformation/>} />
        <Route path='/carttotal'  element={<CartTotal/>} />
        <Route path='/payment'  element={<Paymet/>} />
        
      </Routes>


    </>
  );
}

export default App;
