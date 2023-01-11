import Footer from './common/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistPage from './pages/Playlist';
import Login from './pages/Login';
import Song from './pages/Song';
import Nav from './common/Nav/Nav';

function App() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 15, background: '#222' }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/playlist" element={<PlaylistPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/playlist/:id" element={<Song />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
