import React from 'react'
import styles from './Home.module.css'



const Home = () => {
  return (
    <section className={styles.home__container} id='Home'>
      <div className={styles.hometitle__container}>
        <h1 className={styles.home__title}> CELESTE FERNANDEZ </h1>
        <h2 className={styles.home__subtitle} >Front-End Developer</h2>
      </div>
    </section>
  )
}

export default Home