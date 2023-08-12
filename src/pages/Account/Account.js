import React from 'react'
import './Account.css'
import { useLocation } from 'react-router-dom'

const Account = (  ) => {
    
    const location = useLocation();
    console.log(location)
  return (
    <>
          <div className='nav'>
              <h2>Account Settings</h2>
          </div>

          <div className='container'>
              <div className='Profile'>
                  <img src="https://th.bing.com/th/id/OIP.4oJaarEiPjV3jgsjSIuctwHaJe?pid=ImgDet&rs=1"
                        className='Img' alt='profileImg'>   
                  </img>
                  <i className="fa-solid fa-camera icon"></i>

                  <div className='info'>
                      <h3>{location.state.name}</h3>
                      <h2>{location.state.email}</h2>
                  </div>
                  
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum mollitia, minima alias, tenetur vitae atque et vero
                  pariatur fuga amet minus aut beatae recusandae cupiditate eius.
                  Aperiam aliquam quia hic.
              </p>
          </div>
    </>
  )
}

export default Account
