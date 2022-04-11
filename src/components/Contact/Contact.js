import React from 'react'

import styles from './Contact.module.css'

import image from '../../assets/images/AboutIcons/Download.svg'



const Contact = () => {

  const AboutData = [
    {
      id: 1,
      number: styles.odd,
      name: 'github',
      image: 'Github.svg',
      text: 'celesf00',
      link: 'https://github.com/celestef00'

    },
    {
      id: 2,
      number: styles.even,
      name: 'linkedin',
      image: 'Linkedin.svg',
      text: 'Celeste Fernandez',
      link: 'https://www.linkedin.com/in/celestefernandez00/?locale=en_US'

    },
    {
      id: 3,
      number: styles.odd,
      name: 'mail',
      image: 'Mail.svg',
      text: 'celestefernandez00@gmail.com',
      link: 'mailto:celestefernandez00@gmail.com'

    }


  ]

  return (
    <div className={styles.contact__container} id='Contact'>
      
      <h1 className={styles.contact__title}>
        Let's get in touch...
      </h1>

      <div className={styles.contact__body}>
      {
        AboutData.map((data)=> {
          return(
            

            <a key={data.id} className={` ${styles.contact__btn} ${data.number} ${styles.link}`} href={data.link} target="_blank" rel="noreferrer"> 
  
              <img alt={`${data.name} icon`} className={styles.image} src={require(`../../assets/images/AboutIcons/${data.image}`)}></img>

              <p className={styles.text}>{data.text}</p>
  
            </a>
  
            
  
          

          )
        })

      }

        
          <a className={`${styles.contact__btn} ${styles.even} ${styles.link}`} href={'/CELESTEFERNANDEZ-CV.pdf'} target="_blank" rel="noreferrer"> 

            <img alt='download icon' className={styles.image} src={image}></img>
            <p className={styles.text}>Download my CV</p>

          </a>


        

      </div>

      
    </div>
  )
}

export default Contact