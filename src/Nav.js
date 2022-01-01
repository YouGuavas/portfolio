import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  toggle = (menuType='', index=undefined) => {
    let toggleClasses;
    const oldIndex = this.state.activeIndex;
    this.setState({activeIndex: index}, () => {
      if (menuType === 'mobile') {
        toggleClasses = ['text-white', 'hover:text-white', 'bg-green-500', 'hover:bg-green-500', 'font-semibold', 'transition', 'duration-300'];
        const active = document.getElementById(`mobileMenu${oldIndex}`);
        const activeA = document.querySelector(`#mobileMenu${oldIndex}>a`);
        const inactive = document.getElementById(`mobileMenu${this.state.activeIndex}`);
        const inactiveA = document.querySelector(`#mobileMenu${this.state.activeIndex}>a`);
        active.classList.toggle('active');
        inactive.classList.toggle('active');
        toggleClasses.map((toggleClass) => {
          activeA.classList.toggle(toggleClass);
          inactiveA.classList.toggle(toggleClass);
          return null;
        });
      } else {
        toggleClasses = ['text-black', 'text-gray-200', 'hover:text-gray-200', 'border-b-4', 'border-gray-200', 'transition', 'duration-300'];
        const active = document.getElementById(`bigMenu${oldIndex}`);
        const inactive = document.getElementById(`bigMenu${this.state.activeIndex}`)
        toggleClasses.map((toggleClass) => {
          active.classList.toggle(toggleClass);
          inactive.classList.toggle(toggleClass);
          return null;
        });
      }
    })
    
  }
  handleClick = (menuType='', item='', index=undefined) => {
    const btn = document.getElementById("nav-button");
    const menu = document.getElementById("mobile-menu");
    if (menuType === 'mobile') {
      menu.classList.toggle('hidden');
      btn.classList.toggle('hidden');
    } 
    if (item.length > 0) {
      this.toggle(menuType, index);
    }
    
  }
  render() {
  const links = ['Home', 'Work', 'Contact Me'];
  
  return(
    <nav className='sticky top-0 z-50 bg-yellow-500 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-black text-lg">
                  <img alt="An image of my personal logo" className="h-24"src="https://lh3.googleusercontent.com/l-ZXTHubGlEAxVyrpOscTNfz89iOEOYZuHN3RYyAr1NoOY0buMI6T3u9nsBRPF4hdddyZ-5sdM2__V7NsJ9RbNdwazkBr1tLftGAINPThBu7cYIJqlkW7MHPm81-2CIuU5XoU_xJHHvN55nOYvuVvpD8ZjsYv6C3O2ZHMM5rmkA9iapLR5Uwz-iA9nZxinI_wFvHwFGdpYvvK4CPSAByg8A6S5wPlYmp49vcyT2i6MKaR38fuZWPVgxZ4i7HYcRFKgKzrKHKZwRNV_hlOWSazMC4oUTF5cTYhwWzTYzSbQZlfz5RPf1ko53Ii9D7vDd8dai7sUb_CrhyBYuc0gKL6Bz3X6a-QFGqdDpJ5lpgUq5nAgJdK_hW39vsC1KdGKV-AjpgWtZ68lbZHUo3iP0CHf2kXUXEpGRvM08RCSfYHDQQKZZtvpJ2PxDDdhqwAd5f2O0gCIj4dvXoJWpH865BRbdWaK-Cq8yU9n9QyQeAjhFv5FtABtALtB5WgLfhU2HBMFX4odkBNpILxDc4-D19LRLOVO2c8loZhbLgbUIN_Y2i0je9X1Kc7K2fJ2JbwFeS4lruMciaiUGmatTijPcHz3MRIMnjQd6aEXhodz0If1F4rPerpgerOqr2m9DFMPFiBvMXVaL0MN6Ru24vfeOHkGcQ-Tokok12pn7oruAKHzsf2H8ikf3CiEBoqXvkWwFNU-FKao3GDvs-3srhlSO9Mx-V=s144-no?authuser=0" />
                </span>
              </a>
            </div>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (
               index === 0 ? <a href='#' key={index} id={`bigMenu${index}`} className="py-4 px-2 text-gray-200 border-b-4 border-gray-200 font-semibold" onClick={() => {this.handleClick('', item, index)}}>{item}</a> : <a href={`#${item}`} key={index} id={`bigMenu${index}`} className="py-4 px-2 text-black font-semibold hover:text-gray-200 transition duration-300" onClick={() => {this.handleClick('', item, index)}}>{item}</a>
            ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
              <svg className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
        </div>
        <div id="mobile-menu" className="hidden mobile-menu">
          <ul className="">
            {links.map((item, index) => (
              index === 0 ? <li className="active" key={index} id={`mobileMenu${index}`}><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold" onClick={() => {this.handleClick("mobile", item, index)}}>{item}</a></li> : <li key={index} id={`mobileMenu${index}`}><a href={`#${item}`} className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => {this.handleClick("mobile", item, index)}}>{item}</a></li>
            ))}
            {/*
            <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            */}
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
  }
}

export default Nav;