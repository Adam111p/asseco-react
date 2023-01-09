import Reacrt, { FC } from 'react';
import Time from './time';

export interface Song {
    pos?: number; //z opcjonalnym miałem problem 
    name: String;
    timeSec: number; // to na int później 
}
interface SongL {
    song: Song;
}
const SongNode: FC<SongL> = ({ song }) => {

    
    return (<div style={{ display: "box" }}>

        <span> {song.pos} </span>
        <span> {song.name} </span>
        <span> <Time t={song.timeSec} /> </span>
    </div>)
}


export default SongNode;
