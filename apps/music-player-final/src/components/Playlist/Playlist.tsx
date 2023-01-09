import React, { FC } from 'react';
import Song from '../Song/Song';

interface PlaylistProps {
  title: string;
  songs: unknown[];
}

const Playlist: FC<PlaylistProps> = ({ title, songs }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {songs.map(song => <Song name="abc" />)}
      </ul>
    </div>
  )
}

export default Playlist;
