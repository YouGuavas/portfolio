import '../styles/globals.scss';
import React from 'react';

import Nav from '../components/Nav';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <a href="/">
        <img alt="My personal logo" className="my-logo" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLVPC2BJfIQB4fItmFhWcKIgPcrIDEj3B-YyOJCBCnyfd4NAVGqQFCdnwZ64_KCC-n_klk_pv0fdm5XzMOyFmJtMhbdPdon8p64mxwd6InQl72gB-Mv1_ot77YckKZuOOACos2uJPNu6sELYE-AqN1or=s1080-no?authuser=0" />
      </a>
      <Nav links={['Home', 'Work', 'Obsessions', 'Blog', 'Contact']}/>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;