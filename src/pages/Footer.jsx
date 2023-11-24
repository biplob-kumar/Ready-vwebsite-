import React from 'react'
import "../style/Footer.css"
import goole from "../../public/img/google-play-badge.png";

const Footer = () => {
  return (
   <section className='footer py-3  '>
     <div className="container footer-wraper py-5  text-white">
         <div className="footer-logo ">
            <a href="">Ready</a>
            <p>দ্রুততম সল্যুশনের জন্য রেডএক্স অ্যাপটি ডাউনলোড করুন</p>
            <img src= {goole} alt="" />
         </div>
         <div className="importent-link">
            <h4 className=''>গুরুত্বপূর্ণ লিংক</h4>
             <ul className='link'>
                <li><a href="">কুরিয়ার</a></li>
                <li><a href="">এন্টারপ্রাইজ</a></li>
                <li><a href="">কভারেজ এরিয়া</a></li>
                <li><a href="">কভারেজ এরিয়া</a></li>
                <li><a href="">FAQs</a></li>
             </ul>
         </div>
         <div className="contact">
            <h4>যোগাযোগ</h4>
            <p>শপআপ, ৪র্থ তলা, এসকেএস  <br /> টাওয়ার, ৭ ভিআইপি রোড, মহাখালী, ঢাকা</p>
            <p>০৯৬১০০০৭৩৩৯</p>
            <p>contact@redx.com.bd</p>
         </div>
         <div className="add">
            <h4>সংযুক্ত হন</h4>

              <div className="icons">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-facebook-messenger"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
              </div>
            <p>© Redx 2023. All rights reserved</p>
         </div>

     </div>
     <  hr />
     <p className='text-center res text-white'> ALL right reserve by biplob kumar </p>
   </section>
  )
}

export default Footer