import React, {FC} from 'react';
import s from "../Dialogs.module.css";

export interface IMessage {
    id: number,
    info: string
}

export const Message:FC<IMessage> = ({id,info}) => {
    return (
        <div className={s.dialogMessage} key={id}>
            {info}
        </div>
    );
};