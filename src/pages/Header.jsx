import React from 'react'
import Logo from './Logo'
import Service from './Service'
import Servicediscution from './Servicediscution'
import Covarage from "./Covarage";
import Calculator from './Calculator'
import Faq from './Faq'
import Footer from './Footer'

const Header = () => {
  return (
    <div>

         <Logo/>
          <Service/>
           <Servicediscution/>
           <Covarage/>
           <Calculator/>
           <Faq/>
           <Footer/>
    </div>
  )
}

export default Header