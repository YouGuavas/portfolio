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
    let activeStyle = "py-4 px-2 text-gray-200 border-b-4 border-gray-200 font-semibold";
    let normalStyle = "py-4 px-2 text-gray-700 font-semibold hover:text-gray-200 transition duration-300";
    let menuType = '';
    if (myhref === "/Home") {
      myhref = "/"
    }
    if (style === "mobile") {
      menuType = 'mobile';
      activeStyle = "block text-sm px-2 py-4 text-gray-200 font-semibold";
      normalStyle = "block text-sm px-2 py-4 text-gray-700 hover:text-gray-200 transition duration-300";
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
    <nav className='sticky top-0 z-50 bg-yellow-500 shadow-lg'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-7'>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="">
                  <img alt="An image of my personal logo" className="h-24"src="https://lh3.googleusercontent.com/s3lSG7Gfn_4DmtevVlwqv5XsRb9JtakoEsodbcDdKPX6aoYfh9T-dGsYgCaZlH32PEcsj3vAibIBSZUbHkQZ88LvW3lAZrgb13GLk9J-E6vp8EF13oLQEZ6H9fZ0Fq9nE2nG0W5eFHzOxKDT8ZPw-8virw9sxk5YwYKlEc-BkBAwdqNfWJgWDo-wikFuYvkCXxd12Mn0fN02lDAk1Vr4oYLo2P6KXrV0tbB9KbZIdyzcOUkza00ewcn38FX6QcWOVxdrURkbNO983X6n9iiBznhxyEd_wN8kmnPdqc9hTXsDtb_78xDpeFwUYUQdZDVWVsvqzKF0frC5BzQ1bBTAAuGrV6FIGZhtL-YeEaFrYzkHK_MlrGUHjlfLR09kVXV_VcWJBoHNWxJL2RezOwZYuMfOBpu4IbDRNgj8qLaTnBhr73z8rHDc71lS94ioLWNHLo4wc7V2wnlxHJNUQK6PrZ3SXvmZ-GuHnFrJP1l7Ehn3aM9bwstW6I2hcyfjX9TrLQ94SFzIj3DgK9YT50T_001wxCiivWvqYxPv-b2IfiRhovEB4nZLTg646GIGfkiLe6nAB30vytOLEVRVFm3_jxd-r4JZO0QbtpEw0MuuaYg_pBAKtcQRLexyq6XPqqSTf8dtXOvGSqN2_eV-tV1VpuzSpIcx-pnhmDkIOdXhRJHhte2qsL-Zp3U_3uAkohJSyCAcfCfR_RD2FxIoor7KGEAh=s594-no?authuser=0" />
                </span>
              </a>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (this.toggler("standard", item, index)))}
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
            {links.map((item, index) => (this.toggler("mobile", item, index)))}
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
  }
}

export default Nav;