import styles from '../styles/Nav.module.scss';

import { Link } from 'react-scroll'


//import Link from 'next/link';
import {useState, useEffect} from 'react';



export default function Nav(props) {
  const links = props.links;

  const [active, setActive] = useState('');
  
  const renderLinks = (item, index) => {
    
    return (
      <li>

      <Link className={`${styles.standardMenuLink} ${styles.standardMenuItem}`} activeClass={styles.active} name={`Nav ${item}`} spy to={item} key={index}>
          {item}
      </Link>
      </li>
    )
  }

  useEffect(function() {
    setActive(window.location.pathname);
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