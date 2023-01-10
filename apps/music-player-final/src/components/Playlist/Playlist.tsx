import React, { FC, useEffect, useState } from 'react';
import { ISong } from '../../songs';
import Player from '../Player/Player';
import Song from '../Song/Song';

interface PlaylistProps {
  title: string;
  songs: ISong[];
}

type SongState = { isPlaying: boolean, isFavorite: boolean };

const Playlist: FC<PlaylistProps> = ({ title, songs }) => {
  const [songState, setSongState] = useState<SongState>({
    isPlaying: false,
    isFavorite: false,
  });

  const [songsState, setSongsState] = useState(songs);

  const [currentlyPlaying, setCurrentlyPlaying] = useState<ISong | null>(null);

  const [sortState, setSorttate] = useState(1);

  const play = () => {
    setSongState((prevState) => ({
      isPlaying: !prevState.isPlaying,
      isFavorite: songState.isFavorite,
    }));
  }
  useEffect(() => {    
      document.title = `Now you listen ${currentlyPlaying?.performer} `; 
      // setCurrentlyPlaying(()=>{
      //   if(currentlyPlaying?.counter) currentlyPlaying.counter+1;
      //   return currentlyPlaying;
      // });
    },[currentlyPlaying]);

  // useEffect(()=>
  // {

  // }
  // );
  const handleSort = () => {
    const result = [...songs].sort((a, b) => a.duration - b.duration * sortState);
    setSorttate(p => p * -1);
    console.log(result);
    setSongsState(result);
  }
  return (
    <div onClick={play} style={{ border: '1px solid', color: '#fff', padding: 15, }}>
      <h2>{title}</h2>
      <button onClick={handleSort}>{sortState > 0 ? "Sort ASC" : "Sort Desc"}</button>
      <Player
        title={currentlyPlaying ? currentlyPlaying.title : ''}
        duration={currentlyPlaying ? currentlyPlaying.duration : 0}
        performer={currentlyPlaying ? currentlyPlaying.performer : ''}
      />
      {songState.isPlaying && <p>aktualny stan</p>}
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {songsState.map((song, i) => <Song
          index={i + 1}
          handleClick={setCurrentlyPlaying}
          {...song}
        />)}
      </ul>
    </div>
  )
}

export default Playlist;
