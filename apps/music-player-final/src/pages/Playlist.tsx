import { useEffect, useState } from 'react';
import Notification from '../common/components/Notification/Notification';
import Playlist from '../player/components/Playlist/Playlist';
import { ISong } from '../player/models/Song';
import { buildUrl } from '../utils/api';

const PlaylistPage = () => {
  const [songs, setSongs] = useState<ISong[]>([])
  const [notification, setNotification] = useState('');
  
  const fetchData = async () => {
    try {
      const res = await fetch(buildUrl(`songs`));
      const { data } = await res.json();
      // if (data.length < 10) {
      //   throw new Error('nie udalo sie pobrac')
      // }
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
