import React from 'react'
import styles from './Navbar.module.css'



const Navbar = () => {
  const navData = [{
    id: 1,
    name: 'Home',
    alt: 'A house icon',
    route: '#Home'
  },{
    id: 2,
    name: 'Work',
    alt: 'A briefcase icon',
    route: '#Work'
  },{
    id: 3,
    name: 'About',
    alt: 'A human silhouette icon',
    route: '#About'
  },{
    id: 4,
    name: 'Contact',
    alt: 'A paper plane icon',
    route: '#Contact'
  }]


  return (
    <div className={styles.navbar__container}>
      <nav className={styles.nav__bar}>
        <ul className={styles.nav__container}>
          {
            navData.map((item)=> {
              return(
                <li key={item.id} className={styles.nav__button}>
                  <a href={item.route} className='link'>
                    
                    <img src={require(`../../assets/images/${item.name}.svg`)} alt={item.alt} className={styles.nav__icon}></img> 
                    
                    <p className={styles.nav__text}>{item.name}</p>
                  </a>
                </li>
              )
            })
          }

        </ul>
      </nav>
    </div>
  )
}

export default Navbar