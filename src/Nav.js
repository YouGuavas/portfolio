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
              <img alt="My personal logo" className="h-24"src="https://lh3.googleusercontent.com/tqwcv0YDVyi-z0OFmiVZrKqpRrgojPWs4dzga4m-hJfnVMDLt-NFP0rCjR098zdqr0DpoFDmU5HKdSm8eAM5WMMXQh6moIg_hpA8Gz4RF1Y4xRpjqgEMr2-L-Tc8I0wP5mwdUVFgHMR6E2yMjsgHx1dzBQtoK9w3aohjhWQPFIZlpV-mkjwIlwOM9W5N0RvInD7DAXi5N38zhYGpd07xakHhFlBSSvwU5SJXolx0sfNE4Mb7er2RenvAVUYDjK9vF-LU67INrDU5vEvCxZQz3FXKf4CIlJMQKqkg9qWWbXCuLLbUuAwjL9wmpc6l8XWFvJcjH1drjWJ-sAQoEvHQbJ3_P_Bb1piDHflK_ME68xy9K67gSAPX3mM5wwx_v5HQJqjGvv-uqggK28yNMh9wQn9LtqyO1dW4Hjjh9FNUHprYwbdUo5MmO-95tkdcmBjWdJtWjYaK7yypgc8_2dK9dgoXXTFt2tLQqJUSRkVcUD8V25ExYJ2rfrk9yrdFSSupVjlbItoOQ5smXzi_IJgPs7D7o8_wcv9LVg8Jc_2f065DgVwQUXh4oAvaOMQogLAEVDowF2aHrB5wuWfN30Qh6hBqK19n2EN32KxBx5G-oz9vrIVpBQ0m2krUem3wHEHRNayoGdMtokHYPlFE1nZAS6l5W1IGxdqujyZpkbLxE9SVqfJDSuHVsPaKXABDR80_vVvXvc5PeSA8HnHrCMKrt28=s666-no?authuser=0" />
          </a>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (this.toggler("standard", item, index)))}
          </div>
          <div className="md:hidden flex items-center">
            <button id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
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