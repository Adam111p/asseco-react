import React from 'react';
import { convertSecondsToMinutes } from '../../utils/convertTime';

interface SongProps {
  name: string;
}

class Song extends React.Component<SongProps> {
  render(): React.ReactNode {
    return <li style={{
      color: 'blue',
    }}>
      {this.props.name}
      {convertSecondsToMinutes()}
    </li>
  }
}

export default Song;
