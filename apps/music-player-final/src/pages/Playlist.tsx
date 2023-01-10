import { useEffect, useState } from 'react';
import Playlist from '../components/Playlist/Playlist';
import { ISong } from '../models/Song';

const PlaylistPage = () => {
  const [songs, setSongs] = useState<ISong[]>([])
  
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

  return <Playlist title="Nowa playlista" songs={songs} />
}

export default PlaylistPage;
