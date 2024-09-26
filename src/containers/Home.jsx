import React from 'react';
import s from '../components/Main.module.css';
import newspaper from '../assets/newspaper.png';

export default function Home() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'Today';
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const date = new Date();
    return (
        <div className={s.main}>
            {/* eslint-disable-next-line max-len */}
            <h1 className={`${s.title} ${s.textOutline}`}>{day}, {date.getDate()}th of {monthNames[date.getMonth()]}</h1>
            <img className={s.image} src={newspaper} alt="newspaper" />
        </div>
    );
}
