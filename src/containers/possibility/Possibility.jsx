import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Developers can now customize <br /> GPT-3 for their own applications.</h1>
        <p>Our API has been deployed in thousands of applications with tasks ranging from helping people learn new languages to solving complex classification problems.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
  </div>
  )
}

export default Possibility