import React, {FC} from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export interface IDialog {
    name: string,
    id: number,
    avatar: string
}

export const DialogItem: FC<IDialog> = ({id, name, avatar}) => {
    return (

            <div className={s.user}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                <NavLink to={`/dialogs/${id}`} activeClassName={s.active}
                         className={s.dialogUser} key={id}>{name}</NavLink>
            </div>

    );
};
