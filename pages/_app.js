import '../styles/globals.scss';
import React from 'react';

import Nav from '../components/Nav';

function App({Component, pageProps}) {
  return (
    <React.Fragment>
       <a href="/">
                <img alt="My personal logo" className="my-logo" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLXobqMgXDoXyzPRKm742CJiAwM_7Jq7miVxfm5-L_3tXV6xpDGPtClU_Tj8auUFChiXbqCnndNoa6b4t-ivMEin6PTsAuU8IdDoeP8WlagAdMvDELigoAhvSeCS2kSyY0aNUT1PaeD3VM7We2tX58bq=s96-no?authuser=0" />
            </a>
            <Nav links={['Home', 'Work', 'Obsessions', 'Blog', 'Contact']}/>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;