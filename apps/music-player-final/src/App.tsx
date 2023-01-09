import React from 'react';
import Playlist from '../../music-player-final/src/components/Playlist/Playlist';
import './App.css';
import songs from './songs';

function App() {
  return (
    <div className="App">
      <Playlist title="Nowa playlista" songs={songs} />
    </div>
  );
}

export default App;
