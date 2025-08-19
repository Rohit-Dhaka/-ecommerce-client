import './App.css';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Subscribe from './components/layout/Subscribe';

function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
      <LoginForm/>
      <SignupForm/>
      <About/>
      <Subscribe/>
      <Contact/>

    </>
  );
}

export default App;
