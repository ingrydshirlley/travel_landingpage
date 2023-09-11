import React from 'react'
import './home.css'
import video from '../../Assets/videoHome.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaTripadvisor } from 'react-icons/fa'
import { TbApps } from 'react-icons/tb'
import { BsListTask } from 'react-icons/bs'

const Home = () => {
  return (
    <section className="home">

      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Nossos Pacotes
          </span>

          <h1 className="homeTitle">
            Encontre suas Férias
          </h1>
        </div>

        <div className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city">Selecione seu destino:</label>
            <div className="input flex">
              <input type="text" placeholder='Digite aqui...' />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Selecione a data:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Valor máximo:</label>
              <h3 className="total">R$50.000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="50000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>

        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home