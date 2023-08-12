import React, { useState } from 'react'
import './CreateAccount.css'
import { useNavigate } from 'react-router-dom'


const CreateAccount = () => {

    const [name, setName ] = useState( null );
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
        navigate( '/account', { state: { name, email } }  );
    };

  return (
    <div>
          <h1>Create your PopX account </h1>
          <form className="form">
              
              <div className="input-container">
                  <label htmlFor="fullName">Full Name <span>*</span></label>
                  <input type="text" id="fullName" name="fullName" value={name} onChange={onChangee} required />
              </div>

              <div className="input-container">
                  <label htmlFor="phoneNumber">Phone Number <span>*</span></label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" required />
              </div>

              <div className="input-container">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input type="email" id="email" name="email" value={email} onChange={onChangee} required />
              </div>

              <div className="input-container">
                  <label htmlFor="password">Password <span>*</span></label>
                  <input type="password" id="password" name="password" required />
              </div>

              <div className="input-container">
                  <label htmlFor="companyName">Company Name <span>*</span></label>
                  <input type="text" id="companyName" name="companyName"  />
              </div>

              <div className="radio-container">
                  <label>Are you an agency? <span>*</span></label>
                  <div className="radioBox">
                      <label>
                         <input type="radio" name="agency" value="yes" required />  Yes
                          
                      </label>
                      <label>
                          <input type="radio" name="agency" value="no" />   No
                          
                      </label>
                  </div> 
             </div>

              
             <button type="submit" onClick={navigateWithProps}>Submit</button>
             
             
          </form>
    </div>
  )
}

export default CreateAccount
