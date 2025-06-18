import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Partials.module.css';

const navigation = [
    { id: 1, title: <i className={`${s.house} fa-solid fa-house`} />, path: '/NewsAppWithSaga/' },
    { id: 2, title: 'Latest News', path: '/NewsAppWithSaga/latest-news/1' },
    { id: 3, title: 'Popular News', path: '/NewsAppWithSaga/popular-news/1' },
];

export default function Header() {
    return (
        <header className={`${s.header} content`}>
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
        </header>
    );
}
