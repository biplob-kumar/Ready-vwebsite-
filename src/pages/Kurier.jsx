import React from 'react'
import "./../style/Kurier.css"
import Footer from './Footer'
import Servicediscution from './Servicediscution'
const Kurier = () => {
  return (
    <section className='curier' data-aos="zoom-in">
    <div className='container curier-wraper'>

   <div className="curier-left" data-aos="fade-up-right">
    <h2>দেশজুড়ে দ্রুততম ডেলিভারি সেবা পেতে রেডেক্স কুরিয়ারের সাথে থাকুন!</h2>
    <a className='btn-1' href="">বুথের লোকেশনগুলো দেখুন</a>
   </div>
    </div>
    
    <Servicediscution/>
    <hr />
   <Footer/>
    </section>
  )
}

export default Kurier