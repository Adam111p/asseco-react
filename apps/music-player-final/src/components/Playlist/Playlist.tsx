import React, { FC, useState } from 'react';
import { ISong } from '../../songs';
import Player from '../Player/Player';
import Song from '../Song/Song';

interface PlaylistProps {
  title: string;
  songs: ISong[];
}

type SongState = { isPlaying: boolean, isFavorite: boolean };

const Playlist: FC<PlaylistProps> = ({ title, songs }) => {
  const [ songState, setSongState ] = useState<SongState>({
    isPlaying: false,
    isFavorite: false,
  });

  const [ currentlyPlaying, setCurrentlyPlaying ] = useState<ISong | null>(null);

  const play = () => {
    setSongState((prevState) => ({
      isPlaying: !prevState.isPlaying,
      isFavorite: songState.isFavorite,
    }));
  }

  return (
    <div onClick={play} style={{ border: '1px solid', color: '#fff', padding: 15, }}>
      <h2>{title}</h2>
      <Player
        title={currentlyPlaying ? currentlyPlaying.title : ''}
        duration={currentlyPlaying ? currentlyPlaying.duration : 0}
        performer={currentlyPlaying ? currentlyPlaying.performer : ''}
      />
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {songs.map((song, i) => <Song
          index={i + 1} 
          handleClick={setCurrentlyPlaying}
          {...song}
        />)}
      </ul>
    </div>
  )
}

export default Playlist;
