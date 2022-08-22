import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'/space.png'}
                alt="logo"/>
            <div className={s.title}>Space around network</div>
        </header>
    );
};