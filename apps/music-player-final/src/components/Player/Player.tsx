import { FC } from 'react';
import { ISong } from '../../songs';

interface PlayerProps extends ISong{}

const Player: FC<PlayerProps> = ({ title, performer }) => {
  const showTitle = title ? `${performer} - ${title}` : 'not playing';

  return (
    <div>currently playing: {showTitle}</div>
  )
}

export default Player;
