import React from 'react'

import styles from './Work.module.css'

const Work = () => {
  const workData = [{
    number: '01',
      title: 'Cognizant Softvision - Challenge',
      text: 'Simple trello-like project that helped me to practice React and to learn the css preprocessor SASS.',
      img: 'Project3.svg',
      alt: 'project mockup, desktop device screen',
      icons: ['html5', 'css3', 'javascript', 'react', 'sass'],
      demo: 'https://celestefernandez-cschallenge.vercel.app/',
      github: 'https://github.com/celestef00/cognizant-softvision-challenge'
  },
    {
      number: '02',
      title: 'Odele - E-Commerce',
      text: 'My first React.js project, really enjoyed it and learned about Hooks, Context, React-Router-Dom, API Requests, etc.',
      img: 'Project1.svg',
      alt: 'project mockup, mobile device screen',
      icons: ['html5', 'css3', 'javascript', 'react', 'materialui', 'firebase'],
      demo: 'https://odele.vercel.app/',
      github: 'https://github.com/celestef00/e-commerce-coderhouse'

    },
    {
      number: '03',
      title: 'Meow Keyboard',
      text: 'My first Vanilla Javascript project, practiced DOM manipulation and created a keyboard with kitten paws.',
      img: 'Project2.svg',
      alt: 'project mockup, pc screen',
      icons: ['html5', 'css3', 'javascript'],
      demo: 'https://celestef00.github.io/meow-keyboard/',
      github: 'https://github.com/celestef00/meow-keyboard'
    }
  ]

  return (
    <section className={styles.work__container} id='Work' >
      <div className={styles.projects__container}>
        {
          workData.map((project) => {

            return(
            <div key={project.number} className={styles.project}>

              <div className={styles.project__number}>
                <h2 className={styles.number}>
                  {project.number}
                </h2>
              </div>

              <div className={styles.project__data}>

                <h1 className={styles.project__title}>
                  {project.title}
                </h1>

                <div className={styles.project__body}>

                <img src={require(`../../assets/images/Projects/${project.img}`)} alt={project.alt} className={styles.project__image}></img>
                


                  <div className={styles.project__bodyside}>

                  <p className={styles.project__text}>
                    {project.text}
                  </p>

                  <div className={styles.project__toolbox}> 
                      <h2 className={styles.toolbox__title}>TOOLS</h2>
                      <div className={styles.toolbox__icons}>
                        {
                          project.icons.map( (icon, i) => {
                            return(
                            <img className={styles.toolbox__icon} key={i} src={require(`../../assets/images/Icons/${icon}.svg`)} alt={icon} ></img>
                            )

                          })
                        }
                      </div>
                  </div>
                  

                  <div className={styles.project__buttons}>
                    <a className={styles.btn} href={project.demo}  target="_blank" rel="noreferrer noopener">  
                      LIVE DEMO
                    </a>
                    <a className={styles.btn} href={project.github}  target="_blank" rel="noreferrer noopener"
                    >
                        GH REPO
                    </a>
                  </div>
                
                </div>
                

               
                </div>
                
              </div>
            </div>
            )
          } )
        }


      </div>

    </section>
  )
}

export default Work