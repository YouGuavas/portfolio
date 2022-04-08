import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import CurrentObsession from './components/CurrentObsession';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <Nav links={['Home', 'Work', 'Current Obsession', 'Contact Me']} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/current%20obsession" element={<CurrentObsession />}/>
          <Route path="/contact%20me" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
