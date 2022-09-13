import React, {FC} from 'react';
import s from './User.module.css'

export interface IUser {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export const User: FC<IUser> = ({followed, id, fullName, status, location}) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.info}>
                    <div className={s.name}>{fullName}</div>
                    <div className={s.status}><i>{status}</i></div>
                </div>
                <div className={s.location}>
                    <div className={s.name}>{location.city}</div>
                    <div className={s.status}>{location.country}</div>
                </div>
            </div>
        </div>
    );
};