import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Work />
    </div>
  );
}

function Main() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Hi, I'm Patrick 👋
        </div>
      </div>
  );
}
function Work() {
  return(
    <div id="Work">
      Work
    </div>
  )
}

export default App;
