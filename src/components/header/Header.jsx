import React from 'react'
import CTA from './CTA'
import PP from '../../assets/pp.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
  <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>I'm Joshua Barribal</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocials />
      </div>
  </header>
  )
}

export default Header