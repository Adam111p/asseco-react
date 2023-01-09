import React from 'react';
import { ISong } from '../../songs';
import { convertSecondsToMinutes } from '../../utils/convertTime';

interface SongProps extends ISong {
  index: number;
}

class Song extends React.Component<SongProps> {
  render(): React.ReactNode {
    return <li style={{
      color: 'blue',
    }}>
      {this.props.index}
      {this.props.title}
      {this.props.performer}
      {convertSecondsToMinutes(this.props.duration)}
    </li>
  }
}

export default Song;
