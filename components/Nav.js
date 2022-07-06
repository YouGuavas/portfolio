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
  const renderLinks = (item) => {
    if (item == 'Home') {
      return( 
      <Link href="/">
        <a className={(active === `/${item}`) || (active === `/${item.split(' ').join('')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink}` : styles.standardMenuLink}>
          {item}
        </a>
      </Link>
      )
    } else if (item.indexOf(' ') !== -1) {
      const newLink = item.split(' ').join('');
      return (
      <Link href={`/${newLink.toLowerCase()}`}>
        <a className={(active === `/${item}`) || (active === `/${item.split(' ').join('')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink}` : styles.standardMenuLink}>
          {item}
        </a>
      </Link>
      )
    } else {
      return (
        <Link href={`/${item.toLowerCase()}`}>
        <a className={(active === `/${item}`) || (active === `/${item.split(' ').join('')}`) || ((active === '/') && (item === 'Home')) ? `${styles.active} ${styles.standardMenuLink}` : styles.standardMenuLink}>
          {item}
        </a>
      </Link>
      )
    }
  }
 
  useEffect(function() {
    setActive(window.location.pathname);
  }, [active]);
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
                return (
                  <li className={styles.standardMenuItem} key={index}>
                    {renderLinks(item)}
                  </li>
                )
              })}
        </ul>
      </nav>
    </header>
  )
}