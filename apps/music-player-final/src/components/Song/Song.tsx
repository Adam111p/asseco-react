import React, { SyntheticEvent } from 'react';
import { ISong } from '../../songs';
import { convertDuration } from '../../utils/convertTime';

interface SongProps extends ISong {
  index: number;
  handleClick: (s: ISong) => void;
}

class Song extends React.Component<SongProps, {isPlaying: boolean, isFavorite: boolean}> {
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
        padding: 15,
      }}
      onClick={(e) => {
        const { title, duration, performer } = this.props;
        this.play(e);
        this.props.handleClick({ title, duration, performer });
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '2rem', marginRight: 16 }}>{this.props.index}</span>
        <div>
          <strong>{this.props.title}</strong> - {this.props.performer}
          {this.state.isPlaying && <p>Aktualne gramy!</p>}
        </div>
      </div>    
      {convertDuration(this.props.duration)}
    </li>
  }
}

export default Song;
