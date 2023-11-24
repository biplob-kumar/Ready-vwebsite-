import React from 'react'
import "../style/Brans.css"
import Show   from "../../public/img/BataShow.webp";
const Brand = () => {
  return (
    
   <section className='py-5 bg-dark'>
     <div className='container brnad-wraper'>
      <div className="brand-left text-white" data-aos="zoom-in-down">
        <h1>গ্লোবাল ফুটওয়্যার ব্র্যান্ড ব্যবসায়িক প্রসারে আমাদের অবদান</h1>
        <p>প্রধান ডিস্ট্রিবিউশন হাব থেকে দেশব্যাপী ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য ডেলিভারি করে থাকে রেডএক্স।</p>
         <div className="brand-secundrt">

             <div className="brand-box brand-wraper py-2 text-white">
                <div className="box-b">
                <h4>৮০+</h4>
                <p>ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় রেডএক্স</p>
                </div>
                <div className="box-b">
                <h4>৮০+</h4>
                <p>ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় রেডএক্স</p>
                </div>
             </div>
         </div>

      </div>
  

      <div className="branf-right" data-aos="zoom-in-left">
      <img src= {Show} alt="" />
</div>

     </div>
   </section>
  )
}

export default Brand