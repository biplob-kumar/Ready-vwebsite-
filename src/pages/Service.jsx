import React from 'react'
import "../style/Service.css"
import service from "./../Alldata/servicedata";
const Service = () => {
  return (
    <div className='service bg-dark' data-aos="zoom-in-right">
        <div className="service-header py-5 text-center text-white">
            <h1>সার্ভিস সমূহ</h1>
        </div>
         <div className="container service-wraper">
             {
                service.map((products)=>{
                    return(
                        <div>
                             <div className="service-map" key={products.id}>
                                <div className="service-img">
                                    <img src= {products.image} alt="" />
                                    <h5 className="service-title">{products.title}</h5>
                                    <p className="service-text">
                                        {products.desc}
                                    </p>
                                </div>
                              
                                </div> 
                        </div>
                    )
                })
             }
         </div>

    </div>
  )
}

export default Service