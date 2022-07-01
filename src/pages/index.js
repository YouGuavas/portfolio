//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.module.scss';
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
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/current_obsession" element={<CurrentObsession />}/>
          <Route path="/blog" element={<Blogs posts={posts}/>}/>
          {//<Route path="/blog/:BLOG_ID" element={<Blog posts={posts}/>}/>
          }
          <Route path="/contact%20me" element={<Contact />}/>
        </Routes>
        </BrowserRouter>*/}
    </div>
    </React.Fragment>
  );
}

export default App;