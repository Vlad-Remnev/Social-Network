import React, {FC} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {IAuth} from "../../redux/auth-reducer";

export const Header:FC<IAuth> = ({userId, login, email, isAuth}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img
                    src={'/space.png'}
                    alt="logo"/>
                <div className={s.title}>Space around network</div>
            </div>
            <div className={s.login}>
                {isAuth
                    ? <div>{login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};