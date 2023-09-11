import React from 'react'
import './footer.css'
import video from '../../Assets/videoFooter.mp4'
import { FiSend } from 'react-icons/fi'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>MANTENHA CONTATO</small>
            <h2>Viaje conosco</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Email" />
            <button className="btn fkex" type='submit'>
              ENVIAR <FiSend className='icon'/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer