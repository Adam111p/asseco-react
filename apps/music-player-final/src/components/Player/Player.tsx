import { FC } from 'react';
import { ISong } from '../../songs';

interface PlayerProps extends ISong{}

const Player: FC<PlayerProps> = ({ title }) => {
  return (
    <div>currently playing: {title}</div>
  )
}

export default Player;
