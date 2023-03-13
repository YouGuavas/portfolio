import styles from '../styles/Nav.module.scss';
import Link from 'next/link';

import {useEffect} from 'react';



export default function Nav(props) {
  const links = props.links;

  
  const renderLinks = (item, index) => {
    
    return (
      <li key={index}>

      <Link scroll={false} href={props.pages.indexOf(item.toLowerCase()) !== -1 ? `${item.toLowerCase()}` : `/#${item}`} className={`${styles.standardMenuLink}`}  name={`Nav ${item}`}>
          {item}
      </Link>
      </li>
    )
  }

  const navHighlighter = () => {
    const pages = props.pages;
    if (window) {
    let pageName = window.location.pathname;
    pages.map((page) => {
        if (pageName === '/') return;
        if (pageName === '/'+page) {  
          document.querySelector(`nav a[href=` + `'${pageName}'` + "]").classList.add(styles.active);
        } else {
          document.querySelector(`nav a[href=` + `'${pageName}'` + "]").classList.remove(styles.active);
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