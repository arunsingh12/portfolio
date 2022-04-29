import React, { Component } from 'react'
import './Experience.css'

export class Experience extends Component {
  render() {
    return (
      <div className="experience" id="Experience">
          <div className="achievement">
            <div className="circle">2+</div>
            <span>Year</span>
            <span>Experience</span>
          </div>
          <div className="achievement">
            <div className="circle">10+</div>
            <span>Complated</span>
            <span>Project</span>
          </div><div className="achievement">
            <div className="circle">2+</div>
            <span>Companies</span>
            <span>Work</span>
          </div>
      </div>
    )
  }
}

export default Experience