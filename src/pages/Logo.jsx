import React from 'react'
import  redy  from "./../Alldata/data";
import "../style/Logo.css"
const Logo = () => {
  return (
    <div className='logo-part ' data-aos="flip-up">
     <div className="container logo-wraper">

     {
    redy.map((product)=>{
      return(
          <div className="col-lg-2" key={product.id}>
            <div className="logo-img">
            <img src={product.image} alt="" />
            </div>
         
        </div>
      )
    })
   }
     </div>

    </div>
  )
}

export default Logo