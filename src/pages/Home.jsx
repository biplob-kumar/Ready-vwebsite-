import React from 'react'
import "./../style/Home.css"
import { NavLink } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div className='header'>
      <div className='container header-wraper' >

        <div className="header-left-content"  data-aos="zoom-in-right" >
          <h1>দেশজুড়ে সবচেয়ে বেশি রাইডার
            ৩৫০০+ ফ্রন্টলাইনার</h1>
        </div>

        <div className="hero-right"  data-aos="zoom-in-left" >
          <h6>বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</h6>
          <form action="">
            <input name="phone" type="number" placeholder="ফোন নম্বর" value=""></input>
            <a className='btn-1' href=""  >
              <NavLink to='login'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >SingUp</NavLink>
            </a>
            {/* <button className='btn'>সাইন-আপ করুন</button> */}
            <p>অথবা,</p>
            <h5>মুভমেন্ট স্ট্যাটাস ট্র্যাক করুন</h5>
            <input placeholder="পার্সেল আইডি দিন" class="ant-input ant-input-lg" type="text" value=""></input>
            <a className='btn-1' href=""> ট্র্যাক</a>
          </form>
        </div >

      </div>
      {/*  Header page  */}
      <div className="home-page">
        <Header />
      </div>
    </div>

  )
}

export default Home
