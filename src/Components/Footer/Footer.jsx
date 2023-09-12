import React from 'react'
import './footer.css'
import video from '../../Assets/videoFooter.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

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
              ENVIAR <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex"> <MdOutlineTravelExplore className='icon' /> Travel. </a>
            </div>

            <div className="footerParagraph">
              Sequência de palavras, geralmente latinas ou alatinadas, utilizada para preencher o
              espaço destinado a texto numa publicação, página de Internet, interface gráfico, etc.
              e testar as opções de formatação e edição e o arranjo dos elementos gráficos antes da
              inserção do conteúdo.
            </div>

            <div className="footerSocial">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <FaTripadvisor className='icon' />
              <AiFillInstagram className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">NOSSA AGÊNCIA</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Serviços
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Serviços
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Serviços
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Serviços
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Serviços
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer