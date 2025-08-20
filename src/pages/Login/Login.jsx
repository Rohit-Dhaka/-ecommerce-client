import React from 'react'
import Footer from '../../components/layout/Footer'
import LoginForm from '../../components/Auth/LoginForm'
import Subscribe from '../../components/layout/Subscribe'

const Login = () => {
  return (
    <div>
        <LoginForm/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Login