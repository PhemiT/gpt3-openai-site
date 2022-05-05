import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai1 from '../../assets/ai1.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Build Next Gen Apps with OpenAI's GPT-3</h1>
        <p>OpenAI's API provides access to GPT-3, which performs a wide variety of natural language tasks, and Codex, which translates natural language to code.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people in the program" />
          <p>1,600 people requested access in the last 24hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai1} alt="ai" />
      </div>
    </div>
  )
}

export default Header