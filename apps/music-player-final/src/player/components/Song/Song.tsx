import React, { FC, SyntheticEvent, useState } from 'react';
import { convertDuration } from '../../../utils/convertTime';
import { Link } from 'react-router-dom';
import { ISong } from '../../models/Song';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../store';
import { incrementPlays } from '../../redux/playerSlice'

interface SongProps extends ISong {
  index: number;
  handleClick: (s: Omit<ISong, 'id'>) => void;
}

const Song: FC<SongProps> = (props) => {
  const [state, setState] = useState(() => ({
    isPlaying: true,
    isFavorite: true
  }));

  const dispatch = useDispatch();
  const plays = useSelector((state: RootStore) => state.player.songs[props.id]);

  // const [plays, setPlays] = useState(0);

  const play = () => {
    // setPlays((prev) => prev + 1);
    dispatch(incrementPlays({ id: props.id }));

    setState({
      isPlaying: true,
      isFavorite: state.isFavorite,
    })
  }

  const addToFav = () => {
    setState({
      isFavorite: true,
      isPlaying: state.isPlaying,
    })
  }

  return <li
    style={{
      padding: 15,
    }}
    onClick={() => {
      const { title, duration, performer } = props;
      play();
      props.handleClick({ title, duration, performer });
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '2rem', marginRight: 16 }}>{props.index}</span>
      <div>
        <strong>{props.title}</strong> - {props.performer}
        {state.isPlaying && <p>Aktualne gramy! (Odtworzono: {plays} razy)</p>}
        <Link to={`/playlist/${props.id}`}>Zobacz</Link>
      </div>
    </div>    
    {convertDuration(props.duration)}
  </li>
}

export default Song;
