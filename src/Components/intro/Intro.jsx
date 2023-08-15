import React from 'react'
import "./intro.css";
import Me from "../../img/myimg.png"

const intro = () => {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Prateek Joshi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Logo Designer</div>
              <div className="i-title-item">Video Editor</div>
              <div className="i-title-item">Gamer</div>
            </div>
          </div>

          <p className="i-desc">
          I am dedicated to delivering high-quality work and am eager to contribute to projects that challenge me to learn and grow. With my strong technical skills and enthusiasm, I am confident that I can make a valuable contribution to any team
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src= {Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default intro