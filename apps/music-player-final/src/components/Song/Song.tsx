import React, { SyntheticEvent } from 'react';
import { ISong } from '../../songs';
import { convertSecondsToMinutes } from '../../utils/convertTime';

interface SongProps extends ISong {
  index: number;
  handleClick: (s: ISong) => void;
}

class Song extends React.Component<SongProps> {
  constructor(props: SongProps) {
    super(props);

    this.state = {
      isPlaying: false,
      isFavorite: false,
    }
  }

  play(e: SyntheticEvent) {
    this.setState({
      isPlaying: true
    })
  }

  addToFav() {
    this.setState({
      isFavorite: true
    })
  }

  render(): React.ReactNode {
    return <li
      style={{
        color: 'blue',
      }}
      onClick={(e) => {
        const { title, duration, performer } = this.props;
        this.play(e);
        this.props.handleClick({ title, duration, performer });
      }}
    >
      {this.props.index}
      {this.props.title}
      {this.props.performer}
      {convertSecondsToMinutes(this.props.duration)}
    </li>
  }
}

export default Song;
