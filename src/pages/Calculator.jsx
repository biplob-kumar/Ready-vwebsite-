import React from 'react'

import "./../style/Calculator.css"
const Calculator = () => {
  return (
    <section className='calculator py-5'>
     <div className="container text-white">
      <div className="calculator-header py-5 text-center">
      <h1>  ডেলিভারি ক্যালকুলেটর</h1>
   <p>আপনার শিপমেন্টের সুবিধার জন্য আগে থেকেই আপনার ডেলিভারী চার্জ সম্পর্কে ধারণা নিন</p>
   
<div className="input-wraper" >
      <div className="input-box" data-aos="fade-right"> 
      <div class="label"><div className='pra' ><p>পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )</p></div></div>
      <input type="number" placeholder="পণ্যের ওজন লিখুন" name="weight" step="any" min="0" value=""></input>
      </div>
      <div className="input-box" data-aos="fade-right"> 
      <div class="label"><div className='pra' ><p >পণ্যের বিক্রয়মূল্য</p></div></div>
      <input type="number" placeholder="পণ্যের বিক্রয়মূল্য"  name="weight" step="any" min="0" value=""></input>
      </div>

        <div className="input-box py-5" data-aos="fade-left"> 
      <div class="label"><div className='pra ' ><p >পিক-আপ এলাকা</p></div></div>
      <input type="number" placeholder="পণ্যের ওজন লিখুন"  name="weight" step="any" min="0" value=""></input>
      </div>
      <div className="input-box py-5" data-aos="fade-left"> 
      <div class="label"><div className='pra' ><p >পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )</p></div></div>
      <input type="number" placeholder="পণ্যের ওজন লিখুন"  name="weight" step="any" min="0" value=""></input>
      </div>

     
</div>
<a className='btn' href="#">কভারেজ এলাকা দেখুন</a>

<p className='cal-f py-4'>আপনি কি জানতে চান, যেকোনো লোকেশনে আপনার পার্সেল পাঠাতে কত খরচ হতে পারে? <br />
আমাদের বিস্তারিত <span>  লিস্টটি দেখুন।</span> </p>


      </div>
     </div>
    </section>
  )
}

export default Calculator