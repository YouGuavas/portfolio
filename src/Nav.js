import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active: "/Home"
    };
  }
  toggler = (style, item, index) => {
    //toggle active nav item
    let myhref = "/"+item;
    let activeStyle = "py-4 px-2 text-white font-semibold";
    let normalStyle = "py-4 px-2 text-gray-400 font-semibold hover:text-white transition duration-300";
    let menuType = '';
    if (myhref === "/Home") {
      myhref = "/"
    }
    if (style === "mobile") {
      menuType = 'mobile';
      activeStyle = "block text-sm px-2 py-4 text-white font-semibold";
      normalStyle = "block text-sm px-2 py-4 text-gray-400 hover:text-white transition duration-300";
    }
    const activeLink = <a href={myhref} key={index} className={activeStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;
    const inactiveLink = <a href={myhref} key={index} className={normalStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;

    if (this.state.active === "/") {
      if (item === "Home") {
        return activeLink;
      } else { return inactiveLink;}
    } else if (item.indexOf(' ') >= 0) {
      if ("/"+item.replace(' ', '%20') === this.state.active) {
        return activeLink;
      } else {return inactiveLink;}
    }
    else if ("/"+item === this.state.active){
      return activeLink;
    } else {
      return inactiveLink;
    }
  }

  handleClick = (menuType='', item='', index=undefined) => {
    //toggle mobile menu
    const btn = document.getElementById("nav-button");
    const menu = document.getElementById("mobile-menu");
    if (menuType === 'mobile') {
      menu.classList.toggle('hidden');
      btn.classList.toggle('hidden');
    }; 
    
  }
  componentDidMount() {
    this.setState({
      active: window.location.pathname
    })
  }
  render() {
  const links = ['Home', 'Work', 'Contact Me'];
  
  return(
    <nav className='flex justify-between sticky top-0 z-50 bg-green-900 shadow-lg px-10'>
          <a href="/" className="flex items-center py-2">
              <img alt="My personal logo" className="h-24"src="https://lh3.googleusercontent.com/pw/AM-JKLUjHJIxvNig7z_GFCQGCx6iBecUjhoizK6oig_E4W9Hg7k6LJNZjmaxJKSyDe1r-6kaUKw54E8WVUY1MD6PRPEY2b6iy7XQ4KQGnmjuJs4OhgI70QIxZ6WF2bFUzlqlu9nVM3eUV0XuuMEFUq0Bbknd=s666-no?authuser=0" />
          </a>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (this.toggler("standard", item, index)))}
          </div>
          <div className="md:hidden flex items-center">
            <button name="hamburger menu" id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
              <svg className="w-6 h-6 text-gray-400"
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
            {links.map((item, index) => (this.toggler("mobile", item, index)))}
          </ul>
        </div>
    </nav>
  );
  }
}

export default Nav;