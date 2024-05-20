import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero container'>
       <div className='hero-text'>
        <h1>We are the best Indonesian Restaurant in Africa</h1>
        <p>Experience the vibrant flavors of Indonesia in the heart of Africa at Borneo Restaurant,  indulge your senses with authentic Indonesian cuisine crafted with passion and precision. </p>
        <span className='btn-hero'><button className='btn' >Explore more <img src= {arrow} alt="arrow" className='arrow'  /> </button></span>
        </div>
       </div>
     
      
    </div>
  )
}

export default Hero
