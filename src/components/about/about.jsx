import React from 'react'
import './about.css'
import about from '../../assets/images/about.svg'


const About = () => {
  return (
    <section className='about section' id='About'>
        <div className='about__container'>
            <div className='about__content'>
        <h1 className='about__title'>About Us</h1>

        <div className='about__description1'>
        "Big Data Centre of Excellence" is the Research and Development centre of AKGEC.
        </div>

        <div className='about__description2'>
        BDCOE is the first "Centre of Excellence" in AKTU working in the field of BigData. It was established in 2013 and since 4 years it has been motivating and guiding the students into the world of Big Data. Big Data is the most trending technology of 21st century. It is the hottest market currently. Companies require Big Data Analysts to analyze the large amount of data being generated and gain insights from the data. Businesses are focusing more on agility and innovation, adopting BigData technologies help the companies achieve that in no time. The team aspires to develope skills in Big Data and gradually move from Machine Learning to Deep Learning and finally Artificial Intelligence.
        </div>
        </div>

        <div className='about__img'>
        <img src={about} className='about__img' alt="img"/>
        </div>
        </div>
    </section>
  )
}

export default About