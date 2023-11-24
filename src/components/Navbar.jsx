import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="container">
        <div className="logo">
             Ready
        </div>
        <nav className='nav nav-pils'> 
        <NavLink to='/' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >হোম</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >এন্টারপ্রাইজ</NavLink>
            <NavLink to='kurier'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >কুরিয়ার</NavLink>
      
        </nav>

        < a href='' className='btn'>
        <NavLink to='login'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Login</NavLink>
        </a>
     </div>


    </div>
  )
}

export default Navbar