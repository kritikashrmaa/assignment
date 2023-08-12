import React from 'react'
import './LandingScreen.css'
import {useNavigate} from 'react-router-dom'

const LandingScreen = () => {

  const Navigate = useNavigate();
  return (
    <div>
        <div className='outerBox'>
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="buttonGrp">
          
            <button className='account-btn' onClick={()=>Navigate('/create')}>Create Account</button>
      
            <button className='register-btn' onClick={()=>Navigate('/signin')}>Already registered? Login</button>
          
         </div>
         
      </div>
          
    </div>
  )
}

export default LandingScreen
