import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
      <Feature title="What is GPT-3" text="GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Fast" text="Our advanced inference infrastructure provides extremely short response times." />
        <Feature title="Scalable" text="We can handle high volume requests that scale with your needs." />
        <Feature title="Flexible" text="Easy to use and flexible enough to make machine learning teams more productive." />
      </div>
    </div>
  )
}

export default WhatGPT3