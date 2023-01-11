import { FC, useMemo } from 'react';
import { ISong } from '../../models/Song';
import style from './Player.module.css'

interface PlayerProps extends Omit<ISong, 'id'>{}

const Player: FC<PlayerProps> = ({ title, performer, duration }) => {
  const showTitle = useMemo(() => {
    return title ? `${performer} - ${title}` : 'not playing';
  }, [title, performer]);

  return (
    <div className={style.Playlist}>currently playing: {showTitle}</div>
  )
}

export default Player;
