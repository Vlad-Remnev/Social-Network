import React, {FC} from 'react';
import s from './User.module.css'

export interface IUser {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export const User: FC<IUser> = ({followed, id, name, status, uniqueUrlName, photos}) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.info}>
                    <div className={s.name}>{name}</div>
                    <div className={s.status}><i>{status}</i></div>
                </div>
                <div className={s.location}>
                    <div className={s.name}>Gymri</div>
                    <div className={s.status}>Armenia</div>
                </div>
            </div>
        </div>
    );
};