import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plylst from './component/PlyLst'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ul>
          <Plylst title={"a"} songs={[{name:"Noise",pos:1,timeSec:"00:50" }, {name:"Fear of the dark",pos:2,timeSec:"00:06"}]} ></Plylst>
        </ul>
      </div>
    </div>

  );
}

export default App;
