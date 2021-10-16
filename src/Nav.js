import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick = () => {
    const btn = document.getElementById("nav-button")
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle('hidden');
    btn.classList.toggle('hidden');
  }
  render() {
  const links = ['Home', 'About', 'Contact Me'];
  return(
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Portfolio
                </span>
              </a>
            </div>
					<div className="hidden md:flex items-center space-x-1">
            {links.map((item) => (
               <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">{item}</a>
            ))}
						{/*<a href=""
							className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
            </a>*/}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button id="nav-button" className="outline-none mobile-menu-button" onClick={this.handleClick}>
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
            {links.map((item) => (
              <li><a href={`#${item}`} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">{item}</a></li>
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