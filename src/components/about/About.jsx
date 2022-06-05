import React from 'react'
import './about.css'
import ME from '../../assets/pp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



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
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Years</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Years</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>Years</small>
              </article>
            </div>
            <p>
            I am a graduating student who wants to be a software engineer. I have worked extremely hard and achieved great things in my academic career, 
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