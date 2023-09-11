import React from 'react'
import './main.css'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.jpeg'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Considerada um dos destinos mais românticos do mundo, ideal para lua de mel, a ilha é famosa pelas águas turquesas, pelos bangalôs construídos sobre o mar e pelo contato intenso com a natureza.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'ROMANTIC',
    fees: '$1000',
    description: 'A cidade do amor é conhecida por sua arquitetura deslumbrante, culinária requintada e uma atmosfera romântica que a torna um destino popular para casais.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL',
    fees: '$800',
    description: 'Kyoto é o lugar perfeito para mergulhar na cultura japonesa, com seus templos antigos, jardins zen e tradições centenárias.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Rio de Janeiro',
    location: 'Brazil',
    grade: 'BEACHES',
    fees: '$600',
    description: 'O Rio de Janeiro é famoso por suas praias deslumbrantes, incluindo Copacabana e Ipanema, bem como pelo Carnaval animado e pela estátua do Cristo Redentor.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC',
    fees: '$900',
    description: 'Santorini é conhecida por suas vistas deslumbrantes do mar Egeu, casas brancas e pôr do sol inesquecível sobre o vulcão.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cairo',
    location: 'Egypt',
    grade: 'HISTORICAL',
    fees: '$750',
    description: 'O Cairo é uma cidade rica em história, com suas pirâmides icônicas, esfinges misteriosas e o Museu Egípcio, que abriga tesouros antigos.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'CITY BREAK',
    fees: '$850',
    description: 'Barcelona é uma cidade vibrante e eclética, famosa pela arquitetura de Gaudí, praias ensolaradas e vida noturna animada.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'ADVENTURE',
    fees: '$950',
    description: 'Sydney oferece aventuras emocionantes, desde escalada na Ponte da Baía de Sydney até explorar as praias da costa australiana.'
  } 
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="location">{location}</span>
                  </span>

                  <div className="fees flex">
                    <span>{grade}<small>+1</small></span>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <h5>{description}</h5>
                  </div>

                  <button className='btn flex'>
                    Detalhes <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


export default Main