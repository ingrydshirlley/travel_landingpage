import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    
    const [active, setActive] = useState ('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">

            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                        <h1>
                            <MdOutlineTravelExplore className="icon"/>
                            Travel.
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'><a className='navLink' href="#">Packages</a></li>
                        <li className='navItem'><a className='navLink' href="#">Home</a></li>
                        <li className='navItem'><a className='navLink' href="#">Shop</a></li>
                        <li className='navItem'><a className='navLink' href="#">About</a></li>
                        <li className='navItem'><a className='navLink' href="#">Pages</a></li>
                        <li className='navItem'><a className='navLink' href="#">New</a></li>
                        <li className='navItem'><a className='navLink' href="#">Contact</a></li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </header>

        </section>
    )
}

export default Navbar