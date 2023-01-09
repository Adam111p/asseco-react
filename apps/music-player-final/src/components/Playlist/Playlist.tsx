import React, { FC } from 'react';
import { ISong } from '../../songs';
import Song from '../Song/Song';

interface PlaylistProps {
  title: string;
  songs: ISong[];
}

const Playlist: FC<PlaylistProps> = ({ title, songs }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {songs.map((song, i) => <Song index={i + 1} {...song} />)}
      </ul>
    </div>
  )
}

export default Playlist;
