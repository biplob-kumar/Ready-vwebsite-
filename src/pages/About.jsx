import React from 'react'
import "./../style/About.css"
import Service from './Service'
import Logo from './Logo'
import Servicediscution from './Servicediscution'
import Brand from './Brand'
import Footer from './Footer'
const About = () => {
  return (
  <div className="her-banner">
    <div className='container  hero-wraper'>

        <div className="hero-left" data-aos="zoom-in">
        <h1>দেশ সেরা এন্টারপ্রাইজ লজিস্টিকস পৌঁছাবে আপনার লক্ষ্যে</h1>
        <ul>
            <li><i class="fa-solid fa-circle-check"></i> দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক</li>
            <li><i class="fa-solid fa-circle-check"></i> দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক</li>
            <li><i class="fa-solid fa-circle-check"></i> দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক</li>
        </ul>
        <h4>সরাসরি আমাদের সেলস টিম কে কল করুনঃ <i class="fa-solid fa-phone"></i> <a href="">০৯৬১০০০৭৩৩৯</a> </h4>
        </div>

        <div className="hero-right" data-aos="zoom-out">
       <h6>বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</h6>
   <form action="">
   <input name="phone" type="number" placeholder="ফোন নম্বর" value=""></input>
<a className='btn-1' href="">সাইন-আপ করুন</a>
{/* <button className='btn'>সাইন-আপ করুন</button> */}
<p>অথবা,</p>
<h5>মুভমেন্ট স্ট্যাটাস ট্র্যাক করুন</h5>
<input placeholder="পার্সেল আইডি দিন" class="ant-input ant-input-lg" type="text" value=""></input>
<a className='btn-1' href=""> ট্র্যাক</a>
   </form>
       </div>

    

    </div>
    <Logo/>
    <Service/>
    <Servicediscution/>
    <Brand/>

    <Footer/>

    </div>
  )
}

export default About