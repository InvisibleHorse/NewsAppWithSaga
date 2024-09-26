import React, { useState } from 'react';
import Login from './Login';
import AdvancedLogin from './AdvancedLogin';
import s from './Authorisation.module.css';

export default function AutorisationMain() {
    const [view, setView] = useState('basic');
    return (
        <div className={s.mainAuth}>
            <nav className={s.nav}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <h3
                    onClick={() => setView('basic')}
                    style={{ color: view === 'basic' ? '#fff' : 'rgba(215,214,214,0.43)' }}
                >
                    Basic
                </h3>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <h3
                    onClick={() => setView('advanced')}
                    style={{ color: view === 'advanced' ? '#fff' : 'rgba(215,214,214,0.43)' }}
                >
                    Advanced
                </h3>
            </nav>
            {view === 'basic' ? <Login /> : <AdvancedLogin />}
        </div>
    );
}
