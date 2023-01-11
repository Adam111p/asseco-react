import Footer from './common/components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistPage from './pages/Playlist';
import Login from './pages/Login';
import Song from './pages/Song';
import Nav from './common/components/Nav/Nav';
import { User, UserContextProvider } from './common/contexts/userContext';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      name: 'Mateusz',
      level: 0,
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
    });
  }, []);

  return (
    <UserContextProvider value={user}>
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
    </UserContextProvider>
  );
}

export default App;
