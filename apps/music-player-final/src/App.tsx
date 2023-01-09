import React from 'react';
import Playlist from '../../music-player-final/src/components/Playlist/Playlist';
import './App.css';
import songs from './songs';

function App() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 15, background: '#222' }}>
      <Playlist title="Nowa playlista" songs={songs} />
    </div>
  );
}

export default App;
