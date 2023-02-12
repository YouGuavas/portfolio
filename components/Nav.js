import styles from '../styles/Nav.module.scss';

import Link from 'next/link';
import {useState, useEffect} from 'react';

export default function Nav(props) {
  const links = props.links;

  const [active, setActive] = useState('');
  const toggleMenu = () => {
    const mobileMenu = document.getElementById('menu-full');
    const mobileBtn = document.getElementById('menu-button-full');
    mobileMenu.classList.toggle(styles.change);
    mobileBtn.classList.toggle(styles.change);
  }
  const renderLinks = (item, index) => {
    /*if (item == 'Home') {
      return( 
      <Link href="/" key={index}>
          <li onClick={toggleMenu} className={(active === `/${item}`) || (active === `/${item.split(' ').join('')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink} ${styles.standardMenuItem}` : `${styles.standardMenuLink} ${styles.standardMenuItem}`}>
            {item}
          </li>
      </Link>
      )
    } else {
      return (
        <Link href={`#${item}`} key={index}>
          <li onClick={toggleMenu} className={(active === `/${item}`) || (active.indexOf('/'+item+'/') !== -1) || (active === `/${item.split(' ').join('%20')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink} ${styles.standardMenuItem}` : `${styles.standardMenuLink} ${styles.standardMenuItem}`}>
            {item}
          </li>
        </Link>
      )
    }*/
    return (
      <Link href={`#${item}`} key={index}>
        <li onClick={toggleMenu} className={(active === `/${item}`) || (active.indexOf('/'+item+'/') !== -1) || (active === `/${item.split(' ').join('%20')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink} ${styles.standardMenuItem}` : `${styles.standardMenuLink} ${styles.standardMenuItem}`}>
          {item}
        </li>
      </Link>
    )
  }

  useEffect(function() {
    setActive(window.location.pathname);
  }, [links]);
 
  return (
    <header className={styles.navHeader}>
      <button aria-label="Full Menu Button" onClick={toggleMenu} id="menu-button-full" className={styles.menuButton}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
      </button>
      <nav className={styles.myNavFull} id="menu-full">
        {/*Standard menu, hides below laptop size*/}
        <ul className={styles.standardMenu}>
            {links.map((item, index) => {
                return renderLinks(item, index)
              })}
        </ul>
      </nav>
    </header>
  )
}