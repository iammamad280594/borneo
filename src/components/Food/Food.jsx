import React from 'react'
import './Food.css'
import gallery_1 from '../../assets/gallery-1.webp'
import gallery_2 from '../../assets/gallery-2.webp'
import gallery_3 from '../../assets/gallery-3.webp'
import gallery_4 from '../../assets/gallery-4.webp'
import white_arrow from '../../assets/white-arrow.png'
const Food = () => {
  return (
    <div className='food'>
      <div className="gallery">
        <img src={gallery_1} alt="makanan terbaik" />
        <img src={gallery_2} alt="kopi terbaik" />
        <img src={gallery_3} alt="jus terbaik" />
        <img src={gallery_4} alt="pelanggan senang" />
      </div>
      <div className='btns'>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
      </div>
      

      
    </div>
  )
}

export default Food
