import '../styles/globals.scss';
import React from 'react';
import logo from '../public/images/logo.png';


import Nav from '../components/Nav';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <a href="/">
        <img alt="My personal logo" className="my-logo" height="96" width="96" src={logo.src} />
      </a>
      <Nav links={['Home', 'Work', 'Contact']}/> {/*'Blog', 'Obsessions' */}
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;