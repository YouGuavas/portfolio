import styles from '../styles/Nav.module.scss';
import Link from 'next/link';

import {useEffect} from 'react';



export default function Nav(props) {
  const links = props.links;

  
  const renderLinks = (item, index) => {
    
    return (
      <li key={index}>

      <Link scroll={false} href={`#${item}`} className={`${styles.standardMenuLink} ${styles.standardMenuItem}`}  name={`Nav ${item}`}>
          {item}
      </Link>
      </li>
    )
  }

  const navHighlighter = () => {
    if (window) {
    const sections = document.querySelectorAll("section[id]");
    let scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 500;
      const sectionId = section.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`nav a[href=` + `'/#${sectionId}'` + "]").classList.add(styles.active);;
      } else {

        document.querySelector(`nav a[href=` + `'/#${sectionId}'` + "]").classList.remove(styles.active);
      }
  })
}
    
  }

  useEffect(function() {
    navHighlighter();
    window.addEventListener('scroll', navHighlighter);
    
  }, [links]);
 
  return (
    <header className={styles.navHeader}>
      <nav className={styles.myNavFull} id="menu-full">
        
        <ul className={styles.standardMenu}>
            {links.map((item, index) => {
                return renderLinks(item, index)
              })}
        </ul>
      </nav>
    </header>
  )
}