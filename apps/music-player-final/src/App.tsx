import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import Playlist from '../../music-player-final/src/components/Playlist/Playlist';
import './App.css';
import Footer from './components/Footer/Footer';
import { ISong } from './songs';

function App() {
  const [ formData, setFormData ] = useState({
    password: '123',
    name: 'abc'
  });
  const [songs, setSongs] = useState<ISong[]>([])

  const saveData = (fieldName: string, fieldValue: string, prevValue = formData) => {
    return {
      ...prevValue,
      [fieldName]: fieldValue,
    }
  }

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/songs');
      const { data } = await res.json();

      setSongs(data);
    } catch (err) {
      
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 15, background: '#222' }}>
      <input
        name="name"
        placeholder='name'
        value={formData.name}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => {
          const v = e.currentTarget.value;
          const name = e.currentTarget.name;
          setFormData((prev) => {
            return saveData(name, v, prev)
          });
        }}
      />
      <input
        name="password"
        placeholder='password'
        value={formData.password}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => {
          const v = e.currentTarget.value;
          setFormData((prev) => {
            return {
              name: prev.name,
              password: v,
            }
          });
        }}
      />
      <Playlist title="Nowa playlista" songs={songs} />
      <Footer />
    </div>
  );
}

export default App;
