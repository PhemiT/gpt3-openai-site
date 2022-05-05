import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Duolingo',
    text: 'Duolingo uses GPT-3 to provide French grammar corrections. An internal Duolingo study shows that use of this feature leads to measurably better second language writing skills!',
  },
  {
    title: 'Viable',
    text: 'Viable helps businesses better and more quickly understand what customers are telling them by using language models, including GPT-3, to analyze customer feedback and generate summaries and insights.',
  },
  {
    title: 'Keeper Tax',
    text: 'Keeper Tax helps freelancers automatically find tax-deductible expenses by using GPT-3 to interpret data from their bank statements into usable transaction information.',
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Built with OpenAI's GPT-3</h1>
        <p>Our API has been deployed in thousands of applications with tasks ranging from helping people learn new languages to solving complex classification problems.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features