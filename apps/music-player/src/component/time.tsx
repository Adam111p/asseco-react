import Reacrt, { FC } from 'react';
import { Interface } from 'readline';

interface ITime {
    t: number;
}

const Time: FC<ITime> = ({ t }) => {

    function toTime(tsec: number) {
        let date = new Date(0);
        date.setSeconds(tsec); 
        return date.toISOString().substring(11, 19);
        
    };

    return (
        <span>{toTime(t)}</span>
    )
}


export default Time;