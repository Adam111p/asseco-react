import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { ISong } from '../../models/Song';
import { prepareHash } from '../../../utils/prepareHash';
import Player from '../Player/Player';
import Song from '../Song/Song';
import styles from './Playlist.module.scss';
import { themeContext } from '../../../common/contexts/themeContext';

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
  const [songsState, setSongsState] = useState(songs);
  const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>('ASC');

  const [ currentlyPlaying, setCurrentlyPlaying ] = useState<Omit<ISong, 'id'> | null>(null);

  const play = () => {
    setSongState((prevState) => ({
      isPlaying: !prevState.isPlaying,
      isFavorite: songState.isFavorite,
    }));
  }
  const theme = useContext(themeContext);
  
  useEffect(() => {
    setSortDirection((prev) => {
      return prev === 'ASC' ? 'DESC' : 'ASC'
    });
  }, [songsState]);

  useEffect(() => {
    setSongsState(songs);
  }, [songs])

  const handleSort = useCallback(() => {
    const result = [...songs].sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a.duration - b.duration;
      }
      return b.duration - a.duration;
    });
  
    setSongsState(result);
  }, [songs, sortDirection]);

  return (
    <div className={theme?.theme==="light"? styles.PlaylistLight: styles.Playlist} onClick={play}>
      <h2 className={styles.Title}>{title}</h2>
      <button onClick={handleSort} className='Playlist__Button'>Sort {sortDirection}</button>
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
        {songsState.map((song, i) => <Song
          index={i + 1}
          key={prepareHash(song.performer, song.title, song.duration)}
          handleClick={setCurrentlyPlaying}
          {...song}
        />)}
      </ul>
    </div>
  )
}

export default Playlist;
