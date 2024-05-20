import React, {useRef} from 'react'
import './Testi.css'
import next_icon from'../../assets/next-icon.png'
import back_icon from'../../assets/back-icon.png'
import user_1 from'../../assets/user-1.jpg'
import user_2 from'../../assets/user-2.jpg'
import user_3 from'../../assets/user-3.jpg'
import user_4 from'../../assets/user-4.jpg'
const Testi = () => {
  
const slider = useRef();
let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="murah" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="enak" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider} >
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_1} alt="senang"  />
            <div>
              <h3> Albert Joseph</h3>
              <span>Kigali, Rwanda</span>
            </div>
            </div>
            <p>An amazing dining experience! The Satay was perfectly grilled, and the Gado-Gado salad was fresh and flavorful. Will definitely be back.</p>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_2} alt="tenang"  />
            <div>
              <h3> Nathan Hugo</h3>
              <span>Texas, USA</span>
            </div>
            </div>
            <p>Absolutely loved the atmosphere and the food. The Rendang was tender and full of rich spices. A must-visit for anyone who loves Indonesian cuisine.</p>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_3} alt="nyaman"  />
            <div>
              <h3> Paul Kagame</h3>
              <span>Berlin, Germany</span>
            </div>
            </div>
            <p>The flavors at this Indonesian restaurant are out of this world! Each dish is a burst of authentic taste. Highly recommend the Nasi Goreng!</p>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_4} alt="luas"  />
            <div>
              <h3> Lana Azhar</h3>
              <span>KL, Malaysia</span>
            </div>
            </div>
            <p>Fantastic food and friendly service. The Ayam Penyet was deliciously spicy, just how I like it. Can not wait to try more dishes!</p>
          </div>
        </li>

        </ul>
        
        </div> 
    </div>
  )
}

export default Testi
