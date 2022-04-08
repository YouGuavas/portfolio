import {useState, useEffect} from 'react';

export default function NavFull(props) {
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
    <nav>
      <button aria-label="Full Menu Button" onClick={toggleMenu} id="menu-button-full" className="menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
      </button>
      {/*Standard menu, hides below laptop size*/}
      <ul className="my-nav-full" id="menu-full">
      <a href="/">
        <img alt="My personal logo" className="my-logo" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLXobqMgXDoXyzPRKm742CJiAwM_7Jq7miVxfm5-L_3tXV6xpDGPtClU_Tj8auUFChiXbqCnndNoa6b4t-ivMEin6PTsAuU8IdDoeP8WlagAdMvDELigoAhvSeCS2kSyY0aNUT1PaeD3VM7We2tX58bq=s96-no?authuser=0" />
      </a>
        <div className="standard-menu">
          {links.map((item, index) => {
              return (
                <li key={index}><a className={(active === `/${item}`) || (active === `/${item.split(' ').join('%20')}`) || ((active === '/') && (item === 'Home')) ? 'active' : ''} href={`/${item}`}>{item}</a></li>
              )
            })}
        </div>
      </ul>
    </nav>
  )
}