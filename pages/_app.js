import '../styles/globals.scss';
import React from 'react';
import Nav from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
        <Link name="Logo Home" href="#Home" scroll={false}>
          <Image alt="My personal logo" className="my-logo" height={96} width={96} src={logo.src} />
        </Link>
          <Nav links={['Home', 'About', 'Work', 'Skills', 'Contact']} pages={['about']}/> {/*'Blog', 'Obsessions' */}

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;