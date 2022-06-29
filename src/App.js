import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import CurrentObsession from './components/CurrentObsession';
import Contact from './components/Contact';
import { Blogs, Blog } from './components/Blog';

function App() {
  const posts = {
    1: {title: 'My First Blog Post', id: 1, body: 'Test Text Test the Rest yes yes'}
  }
  return (
    <div className="App">
      <a href="/">
          <img alt="My personal logo" className="my-logo" height="96" width="96" src="https://lh3.googleusercontent.com/pw/AM-JKLXobqMgXDoXyzPRKm742CJiAwM_7Jq7miVxfm5-L_3tXV6xpDGPtClU_Tj8auUFChiXbqCnndNoa6b4t-ivMEin6PTsAuU8IdDoeP8WlagAdMvDELigoAhvSeCS2kSyY0aNUT1PaeD3VM7We2tX58bq=s96-no?authuser=0" />
        </a>
      <Nav links={['Home', 'Work', 'Current Obsession', 'Blog', 'Contact Me']}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/current%20obsession" element={<CurrentObsession />}/>
          <Route path="/blog" element={<Blogs posts={posts}/>}/>
          <Route path="/blog/:BLOG_ID" element={<Blog posts={posts}/>}/>
          <Route path="/contact%20me" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
