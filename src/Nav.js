function Nav() {
  return(
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">
                  Portfolio
                </span>
              </a>
            </div>
					<div class="hidden md:flex items-center space-x-1">
						<a href=""
							className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
            </a>
						<a href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                About
            </a>
						<a href=""
							className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Contact Me
            </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
        </div>
        <div class="hidden mobile-menu">
	<ul class="">
		<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
		<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
		<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
		<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
	</ul>
</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;