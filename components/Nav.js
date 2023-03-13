import styles from '../styles/Nav.module.scss';
import Link from 'next/link';

import {useEffect} from 'react';



export default function Nav(props) {
  const links = props.links;

  
  const renderLinks = (item, index) => {
    
    return (
      <li key={index}>

      <Link scroll={false} href={`#${item}`} className={`${styles.standardMenuLink}`}  name={`Nav ${item}`}>
          {item}
      </Link>
      </li>
    )
  }

  const navHighlighter = () => {
    const pages = props.pages;

    
    if (window) {
    const sections = document.querySelectorAll("section[id]");
    let scrollY = window.scrollY;

    pages.map((page) => {
      let pageName = window.location.pathname;
      if (pageName === '/') return;
      if (pageName.indexOf('posts') !== -1) {
        pageName = '/blog';
      } else {
      console.log(page, pageName, 'WOOOOOOO')
      }
      if (pageName === '/'+page) {  
        document.querySelector(`nav a[href=` + `'${pageName}'` + "]").classList.add(styles.active);;
      } else {
        document.querySelector(`nav a[href=` + `'${pageName}'` + "]").classList.remove(styles.active);;
      }
    })
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