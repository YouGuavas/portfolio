import '../styles/App.module.scss';
import '../styles/Nav.module.scss';

import Link from 'next/link';

import {useState, useEffect} from 'react';

export default function Nav(props) {
  const links = props.links;

  const [active, setActive] = useState('');

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('menu-full');
    const mobileBtn = document.getElementById('menu-button-full');
    mobileMenu.classList.toggle('change');
    mobileBtn.classList.toggle('change');
  }
 
  useEffect(function() {
    setActive(window.location.pathname);
    console.log(window.location.pathname);
  }, [active]);
  return (
    <header className="nav-header">
      <button aria-label="Full Menu Button" onClick={toggleMenu} id="menu-button-full" className="menu-button">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
      </button>
      <nav className="my-nav-full" id="menu-full">
        {/*Standard menu, hides below laptop size*/}
        <ul className="standard-menu">
            {links.map((item, index) => {
                return (
                  <li key={index}><Link href={`/${item}`}><a className={(active === `/${item}`) || (active === `/${item.split(' ').join('%20')}`) || ((active === '/') && (item === 'Home')) ? 'active' : ''}>{item}</a></Link></li>
                )
              })}
        </ul>
      </nav>
    </header>
  )
}