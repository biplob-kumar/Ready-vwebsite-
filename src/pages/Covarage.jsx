import React from 'react'
import "./../style/Covarage.css"
import map from "../../public/img/bangladash-map_2.png";
const Covarage = () => {
  return (
    <div className='Map py-5 bg-dark'>
          <div className="container map-wraper">
                 <div className="covarage-left-map" data-aos="fade-up-right">
                    <img src= {map} alt="" />
                 </div>
                 <div className="right-content text-white" data-aos="fade-up-left">            <h1>
রেডএক্সের লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে বিস্তৃত</h1>
<h6>আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে সবচেয়ে দ্রুতগতির সেবা</h6>
<a className='btn' href="#">কভারেজ এলাকা দেখুন</a></div>
          </div>
        </div>
  )
}

export default Covarage