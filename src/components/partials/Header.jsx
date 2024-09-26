import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Partials.module.css';

const navigation = [
    { id: 1, title: <i className={`${s.iconColor} fa-solid fa-house`} />, path: '/' },
    { id: 2, title: 'Latest News', path: '/latest-news/1' },
    { id: 3, title: 'Popular News', path: '/popular-news/1' },
];

export default function Header() {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <div>
                    {navigation.map(({ id, title, path }) => (
                        <NavLink
                            key={id}
                            to={path}
                        >
                            {title}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <div className={s.login}>
                <NavLink to="/login"><i className={`${s.iconColor} fa-solid fa-right-to-bracket`} /></NavLink>
            </div>
        </header>
    );
}
