import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Bests from './components/Best/Bests';
import Title from './components/Title/Title';
import About from './components/About/About';
import Food from './components/Food/Food';
import Testi from './components/Testi/Testi';
import Contact from './components/Contact/Contact';
import EmployeeSection from './components/Employees/EmployeeSection';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Helmet>
        <title>My Awesome Restaurant</title>
        <meta name="description" content="Welcome to my awesome restaurant. Enjoy our best dishes and excellent service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.myawesomerestaurant.com/" />
      </Helmet>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our MENU' title='What We Offer' />
        <Bests />
        <About setPlayState={setPlayState} />
        <Title subTitle='Our Best Products' title='Customer Favorite' />
        <Food />
        <Title subTitle='Our Best Members' title='Always Give Their Best For You' />
        <EmployeeSection />
        <Title subTitle='TESTIMONIALS' title='What Customers Say' />
        <Testi />
        <Title subTitle='Contact Us' title='Get in touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
