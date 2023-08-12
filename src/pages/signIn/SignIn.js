import React, { useState } from 'react'
import './signIn.css'

import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const [name, setName] = useState( null );
  const [email, setEmail] = useState( null );
  const navigate = useNavigate();

  const onChangee = ( e ) => {

    console.log( e.target.name );

    if ( e.target.name === 'fullName' )
    {
      setName( e.target.value );
    }

    if ( e.target.name === 'email' )
    {
      setEmail( e.target.value );
    }
  }

  const navigateWithProps = () => {
    navigate( '/account', { state: { name, email } } );
  };
  return (
    <div>
          <div className="container">
              <h1>Signin to your PopX account</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="form">
                  <div className="input-container">
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input type="email" id="email" name="email" value={name} onChange={onChangee} required />
                  </div>
                  <div className="input-container">
                      <label htmlFor="password">Password <span>*</span></label>
                      <input type="password" id="password" name="password" value={email} onChange={onChangee} required />
                  </div>
                  <button type="submit" onClick={navigateWithProps}>Login</button>
              </div>
            </div>
    </div>
  )
}

export default SignIn
