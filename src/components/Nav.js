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
    let activeStyle = "py-4 px-2 my-nav-btn-active font-semibold rounded";
    let normalStyle = "py-4 px-2 my-nav-btn hover:font-semibold rounded";
    let menuType = '';
    if (myhref === "/Home") {
      myhref = "/"
    }
    if (style === "mobile") {
      menuType = 'mobile';
      activeStyle = "block text-sm px-2 py-4 my-nav-btn-active font-semibold";
      normalStyle = "block text-sm px-2 py-4 my-nav-btn";
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
  const links = this.props.links;//['Home', 'Work', 'Cu', 'Contact Me'];
  
  return(
    <nav className='flex font-ui justify-between sticky top-0 z-50 my-forest-bg shadow-lg px-10'>
          <a href="/" className="flex items-center py-2">
              <img alt="My personal logo" className="h-24" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLXobqMgXDoXyzPRKm742CJiAwM_7Jq7miVxfm5-L_3tXV6xpDGPtClU_Tj8auUFChiXbqCnndNoa6b4t-ivMEin6PTsAuU8IdDoeP8WlagAdMvDELigoAhvSeCS2kSyY0aNUT1PaeD3VM7We2tX58bq=s96-no?authuser=0" />
          </a>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (this.toggler("standard", item, index)))}
          </div>
          <div className="md:hidden flex items-center">
            <button name="hamburger menu" id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
              <svg className="w-6 h-6 my-text"
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