import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [user, setUser]=useState(null)
  return (
    <div className='flex item-center justify-between py-4'>
        <link>
        <img  alt="logo" className='w-28 sm:w-32 lg:w-40'/>
        </link>
    

        <div>
            {user ? 

            <div>

            </div> 
            : 
            <div>
                <p>Pricing</p>
                <button>Login</button>

            </div>
            }
            
            
        </div>

    </div>
  )
}

export default Navbar