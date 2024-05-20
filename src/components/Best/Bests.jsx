import React from 'react'
import './Bests.css'
import { Helmet } from 'react-helmet'
import best_1 from '../../assets/best-1.webp'
import best_2 from '../../assets/best-2.webp'
import best_3 from '../../assets/best-3.webp'
import best_icon_1 from '../../assets/icon.png'
import best_icon_2 from '../../assets/icon.png'
import best_icon_3 from '../../assets/icon.png'

const Bests = () => {
  <div>
      <Helmet>
        <title>BORNEO | My Awesome Restaurant</title>
        <meta name="description" content="Learn more about our restaurant, our values, and our mission to provide the best service and food to our customers." />
        <link rel="canonical" href="https://www.myawesomerestaurant.com/about" />
      </Helmet>
  return (
    <div className='bests'   >
      <div className='best'>
        <img src= {best_1} alt="makanan enak" />
        <div className="caption">
          <img src={best_icon_1} alt="minuman enak" />
          <p>Coffee</p>
        </div>
      </div>

      <div className='best'>
        <img src= {best_2} alt=" kopi enak" />
        <div className="caption">
          <img src={best_icon_2} alt="kopi murah" />
          <p>Food</p>
        </div>
      </div>

      <div className='best'>
        <img src= {best_3} alt="jus enak" />
        <div className="caption">
          <img src={best_icon_3} alt="jus murah" />
          <p>Mocktail</p>
        </div>
      </div>
      
    </div>
    
  )
  </div>
}



export default Bests
