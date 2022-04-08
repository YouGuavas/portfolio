import {useState} from 'react';

export default function NavFull(props) {
  const links = props.links;

  const [active, setActive] = useState('Home');

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('menu-full');
    const mobileBtn = document.getElementById('menu-button-full');
    mobileMenu.classList.toggle('change');
    mobileBtn.classList.toggle('change');
  }
  const toggleActive = (e) => {
    setActive(e.target.innerHTML);
  }
  return (
    <nav>
      <button aria-label="Full Menu Button" onClick={toggleMenu} id="menu-button-full" className="menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
      </button>
      {/*Standard menu, hides below laptop size*/}
      <ul className="my-nav-full" id="menu-full">
        <div className="standard-menu">
          {links.map((item, index) => {
              return (
                <li onClick={toggleMenu} key={index}><a className={(active === item) ? 'active' : ''} onClick={toggleActive} href={`/${item}`}>{item}</a></li>
              )
            })}
        </div>
      </ul>
    </nav>
  )
}