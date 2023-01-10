import { useEffect, useState } from 'react';
import Notification from '../components/Notification/Notification';
import Playlist from '../components/Playlist/Playlist';
import { ISong } from '../models/Song';

const PlaylistPage = () => {
  const [songs, setSongs] = useState<ISong[]>([])
  const [notification, setNotification] = useState('');
  
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/songs');
      const { data } = await res.json();
      if (data.length < 10) {
        throw new Error('nie udalo sie pobrac')
      }
      setSongs(data);
    } catch (err: any) {
      setNotification(err.message);

      // setTimeout(() => {
      //   setNotification('');
      // }, 3000)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <Playlist title="Nowa playlista" songs={songs} />
    {notification && <Notification message={notification} handleClick={() => setNotification('')}/>}
  </>
}

export default PlaylistPage;
