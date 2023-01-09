import Reacrt, { FC } from 'react';
import { Interface } from 'readline';

interface ITime{
    t :String;
}

const Time: FC<ITime> = ({t}) => {

    return (
        <span>{t}</span>
    )
}


export default Time;