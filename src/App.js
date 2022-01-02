import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Work from './Work';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/contact%20me" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
