import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import EmployeeSection from '../components/Employees/EmployeeSection'
import Testi from '../components/Testi/Testi'

import Bests from '../components/Best/Bests'
import Title from '../components/Title/Title'
import Contact from '../components/Contact/Contact'
const Home = () => {
  return (
    <div>
  
      
      <Hero />
      <div className='container'>
      <Title subTitle='Our MENU' title='What We Offer' />
        <Bests />
        <About />
        
        <Title subTitle='Our Best Members' title='Always Give Their Best For You' />
        <EmployeeSection />
        <Title subTitle='TESTIMONIALS' title='What Customers Say' />
        <Testi />
        <Contact/>
      </div>
        
       
       
    </div>
  )
}

export default Home
