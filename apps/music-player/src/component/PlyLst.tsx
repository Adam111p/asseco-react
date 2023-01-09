import Reacrt, { FC } from 'react';
import SongNode, { Song } from './song';



interface Songs {
    title: String;
    songs: Song[];
}

const PlayList: FC<Songs> = ({ songs, title }) => {
    return (<li>{songs.map((s,i) =>{
        s.pos=i+1;
        return <SongNode song={s} />})}</li>)
}


export default PlayList;