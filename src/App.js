import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import Subscribe from './components/layout/Subscribe';

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
        <Route path='/login'  element={<LoginForm/>} />
        <Route path='/signup'  element={<SignupForm/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/about'  element={<About/>} />
      </Routes>


    </>
  );
}

export default App;
