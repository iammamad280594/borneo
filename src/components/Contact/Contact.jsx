import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { Helmet } from 'react-helmet'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "affe8729-2a52-463c-8567-3954ba319498");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
    <Helmet>
  <meta name="robots" content="index,follow" />
</Helmet>
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="email langsung" className='message'/></h3>
        <p className='para'>If you have any complaints or suggestions, please dont hesitate to reach out to us via email. Your satisfaction is our top priority!</p>
        <ul>
          <li>Contact@borneo.rwd</li>
          <li>08221207782</li>
          <li>KG 4 AVenue No 18</li>
                   
        </ul>
      </div>
      <div className="contac-col">
        <form onSubmit={onSubmit} >
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label htmlFor=""> Phone Number </label>
          <input type="tel" name='phone' placeholder='Enter your monile number' required />
          <label htmlFor=""> Write your complaint here</label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="email restaurant" /></button>
        </form>
        <span> {result}</span>
      </div>
    </div>
    </div>
  )
  
}

export default Contact
