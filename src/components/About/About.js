import React from 'react'

import styles from './About.module.css'

import image from '../../assets/images/Icon-About.svg'

const About = () => {
  return (
    <div id='About' className={styles.about__container}>

      <div className={styles.about__text}>

        <img alt='girl smiling and grabbing a cup of coffee' className={styles.about__image} src={image}></img>
        
        <div className={styles.about__side}>
          
          <h1 className={styles.about__title}>INTRODUCTION</h1>

          

          <p className={styles.about__body}>
          Hello! My name is Celeste Fernandez and I am a Web Developer based in Argentina. I really love to bring interactive and creative user interfaces to life.
          </p>

        </div>

      </div>
    </div>
  )
}

export default About