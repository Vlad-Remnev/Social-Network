import React from 'react';
import s from './Content.module.css'
import {Posts} from "./Posts/Posts";
import {User} from "./User/User";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content__img}>
                <img src="https://thumbs.dreamstime.com/b/sunset-over-sandy-beach-12416174.jpg" alt="beach"/>
            </div>
            <User />
            <Posts />
        </div>
    );
};