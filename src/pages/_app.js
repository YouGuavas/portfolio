import '../App.scss';
import '../styles/Nav.module.scss';
import Head from 'next/head';
import React from 'react';

import Nav from '../components/Nav';

function App() {
  const posts = {
    1: {title: 'My First Blog Post', id: 1, body: 'Test Text Test the Rest yes yes'}
  }
  return (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Portfolio | Patrick Yambrick</title>         
        </Head>
    <div className="App">
      <a href="/">
          <img alt="My personal logo" className="my-logo" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLXobqMgXDoXyzPRKm742CJiAwM_7Jq7miVxfm5-L_3tXV6xpDGPtClU_Tj8auUFChiXbqCnndNoa6b4t-ivMEin6PTsAuU8IdDoeP8WlagAdMvDELigoAhvSeCS2kSyY0aNUT1PaeD3VM7We2tX58bq=s96-no?authuser=0" />
        </a>
      <Nav links={['Home', 'Work', 'Current_obsession', 'Blog', 'Contact Me']}/>
    </div>
    </React.Fragment>
  );
}

export default App;