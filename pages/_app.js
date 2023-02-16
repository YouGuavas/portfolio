import '../styles/globals.scss';
import React from 'react';
import logo from '../public/images/logo.png';
import Link from 'next/link';
import Image from 'next/image';

import Nav from '../components/Nav';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <Link name="Logo Home" href="#Home" scroll={false}>
        <Image alt="My personal logo" className="my-logo" height={96} width={96} src={logo.src} />
      </Link>
      <Nav links={['Home', 'Skills', 'Work', 'About', 'Contact']}/> {/*'Blog', 'Obsessions' */}
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;