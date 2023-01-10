import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IDetailedSong } from '../models/Song';

const Song = () => {
  const { id } = useParams();
  const [ data, setData] = useState<IDetailedSong | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/songs/${id}`);
      const { data } = await res.json();

      console.log(data);
      setData(data);
    } catch (err) {
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [ id ])

  return data ? <>
    <h2>{data.title}</h2>
  </> : null;
}


export default Song;
