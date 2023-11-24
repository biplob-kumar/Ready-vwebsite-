import React from 'react'
import "./../style/Servicedis.css"
import  discustion  from "./../Alldata/servicedis";

const Servicediscution = () => {
  return (
    <div className='service-discustion' data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
        <div className="service-d-header text-center">
            <h1 className='text-white'>আপনার লজিস্টিক পার্টনার হিসেবে REDY বেছে নিন</h1>
        </div>
          
          <div className="container service-d-wraper">
           
     {
        discustion.map((products)=>{
            return(
                <div className='service-d'> 
                 <div className="servioce-disimage">
                 <img src= {products.image} alt="" />
                  <h2 className="service-title"> {products.title} </h2>
                  <p className="service-text"> {products.desc} </p>
                 </div>

                </div>
            )
        })
     }


          </div>

    </div>
  )
}

export default Servicediscution