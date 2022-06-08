import React from 'react'
import './about.css'
import ME from '../../assets/pp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GoDeviceMobile} from 'react-icons/go'
import {GoBrowser} from 'react-icons/go'
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'



const About = () => {
  return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="avatar" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <GoBrowser className='about__icon'/>
                <h5>Web Development</h5>
                {/* <small>Years</small> */}
              </article>
              <article className='about__card'>
                <GoDeviceMobile className='about__icon'/>
                <h5>Mobile Development</h5>
                {/* <small>Years</small> */}
              </article>
              <article className='about__card'>
                <TbDeviceDesktopAnalytics className='about__icon'/>
                <h5>Machine Learning</h5>
                {/* <small>Years</small> */}
              </article>
            </div>
            <p>
            I am a graduating Computer Engineering student who wants to be a software engineer. I have worked extremely hard and achieved great things in my academic career, 
            and I know that being a software engineer is the right path for me. My skills in mathematics, science, and problem solving will allow me to thrive in this field, 
            and I am excited to see what the future holds.

            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About