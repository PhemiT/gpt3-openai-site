import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai1 from '../../assets/ai1.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open AI</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis perferendis perspiciatis, aperiam aliquid iure quam quidem ipsa neque enim?</p>
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