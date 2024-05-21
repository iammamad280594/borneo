import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import about_img from '../../assets/about.webp';
import play from '../../assets/play.png';
import { Helmet } from 'react-helmet';
import white_arrow from '../../assets/white-arrow.png';

const About = ({ setPlayState }) => {
  return (
    <div>
      <Helmet>
        <title>About Us | My Awesome Restaurant</title>
        <meta name="description" content="Learn more about our restaurant, our values, and our mission to provide the best service and food to our customers." />
        <link rel="canonical" href="https://www.myawesomerestaurant.com/about" />
        <meta property="og:title" content="About Us | My Awesome Restaurant" />
        <meta property="og:description" content="Learn more about our restaurant, our values, and our mission to provide the best service and food to our customers." />
        <meta property="og:image" content="https://www.myawesomerestaurant.com/images/about-us.jpg" />
        <meta property="og:url" content="https://www.myawesomerestaurant.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | My Awesome Restaurant" />
        <meta name="twitter:description" content="Learn more about our restaurant, our values, and our mission to provide the best service and food to our customers." />
        <meta name="twitter:image" content="https://www.myawesomerestaurant.com/images/about-us.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "My Awesome Restaurant",
              "image": "https://www.myawesomerestaurant.com/images/logo.png",
              "@id": "https://www.myawesomerestaurant.com",
              "url": "https://www.myawesomerestaurant.com",
              "telephone": "+1-800-555-5555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Anytown",
                "addressRegion": "CA",
                "postalCode": "90210",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0522,
                "longitude": -118.2437
              },
              "sameAs": [
                "https://www.facebook.com/myawesomerestaurant",
                "https://www.twitter.com/myawesomerestaurant",
                "https://www.instagram.com/myawesomerestaurant"
              ]
            }
          `}
        </script>
        <meta name="robots" content="index,follow" />
        <html lang="en" />
        <meta httpEquiv="Content-Language" content="en-US" />
      </Helmet>
      <div className='about'>
        <div className="about-left">
          <img src={about_img} className='about-img' alt='video pelanggan' />
          <img src={play} className='play' alt='video restaurant' onClick={() => {
            setPlayState(true);
          }} />
        </div>
        <div className="about-right">
          <h3>ABOUT BORNEO</h3>
          <h2> Our Vision is Introducing Indonesian Food</h2>
          <p>We envision becoming Africa go-to destination for authentic Indonesian cuisine. Through our culinary excellence, we aim to connect continents, fostering a deeper appreciation for diversity and cultural exchange through the joy of shared meals. Join us as we celebrate the fusion of flavors and cultures, right here in Africa</p>
          <Link to="/about" className='btn dark-btn'>About Us <img src={white_arrow} alt="" /></Link>
        </div>
      </div>  
    </div>
  );
}

About.propTypes = {
  setPlayState: PropTypes.func.isRequired
};

export default About;
