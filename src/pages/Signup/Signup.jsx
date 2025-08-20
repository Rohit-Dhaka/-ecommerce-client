import React from 'react'
import SignupForm from '../../components/Auth/SignupForm'
import Footer from '../../components/layout/Footer'
import Subscribe from '../../components/layout/Subscribe'

const Signup = () => {
  return (
    <div>
        <SignupForm/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Signup