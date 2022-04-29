import React, { Component } from 'react'
import './Works.css'
import {Link} from 'react-scroll'


export class Works extends Component {
  render() {
    return (
      <div className="works">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>I'M Done work with many Companies project.</span>
          
          <Link spy={true} to="Contact" smooth={true} >
          <button className='button s-button'>Hire Me </button> 
          </Link>     
        </div>
        <div className="w-right">
          <div className="w-mainCircle">
            <div className="secCircle">
            <img src="/img/upwork.png" alt="" />
            </div>
          
            <div className="w-secCircle">
              <img src="/img/fiverr.png" alt="" />
            </div>
            <div className="w-secCircle">
              <img src="/img/amazon.png" alt="" />
            </div>
            <div className="w-secCircle">
              <img src="/img/shopify.png" alt="" />
            </div>
            <div className="w-secCircle">
              <img src="/img/facebook.png" alt="" />
            </div>
            
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>

        </div>
      </div>
    )
  }
}

export default Works