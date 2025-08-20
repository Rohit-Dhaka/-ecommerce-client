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

      <Routes>
        <Route path='/login'  element={<Login/>} />
        <Route path='/signup'  element={<Signup/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/about'  element={<AboutPage/>} />
        <Route path='/contact'  element={<Contactpage/>} />
        <Route path='/orders'  element={<Myorders/>} />
        
      </Routes>


    </>
  );
}

export default App;
