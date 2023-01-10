import { FC, useMemo } from 'react';
import { ISong } from '../../songs';

interface PlayerProps extends ISong{}

const Player: FC<PlayerProps> = ({ title, performer, duration }) => {
  const showTitle = useMemo(() => {
    return title ? `${performer} - ${title}` : 'not playing';
  }, [title, performer]);

  return (
    <div>currently playing: {showTitle}</div>
  )
}

export default Player;
