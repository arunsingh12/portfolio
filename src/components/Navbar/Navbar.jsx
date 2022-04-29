import React, { Component } from 'react'
import '../Navbar/Navbar.css'
import {Link} from 'react-scroll'

export class Navbar extends Component {
  render() {
    return (
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Arun</div>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Home</li>
              </Link>
              <Link spy={true} to="Services"smooth={true} >
              <li>Services</li>
              </Link>
              <Link spy={true} to="Experience" smooth={true} >
              <li>Experience</li>
              </Link>
              <Link spy={true} to="Portfolio" smooth={true} >
              <li>Portfolio</li>
              </Link>
              <Link spy={true} to="Testimonials" smooth={true} >
              <li>Testimonials</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link spy={true} to="Contact" smooth={true} >
        <div className="button n-button">Contact us</div>
        </Link>
      </div>
    )
  }
}

export default Navbar
