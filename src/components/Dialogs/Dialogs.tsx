import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

// export interface IDialogs {
//     state: IDialogsAll
//     onAddMessage: () => void
//     onMessageChange: (text: string) => void
// }

export const Dialogs: FC<DialogsPropsType> = ({messagesPage, onMessageChange, onAddMessage}) => {

    let dialogs = messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id++} id={dialog.id} name={dialog.name}
                                                              avatar={dialog.avatar}/>)
    let messages = messagesPage.messageData.map(message => <Message key={message.id++} id={message.id} info={message.info}/>)

    // let newMessage = useRef<HTMLTextAreaElement>(null)

    const addNewMessageHandler = () => {
        onAddMessage()
    }

    const messageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onMessageChange(event.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {dialogs}
            </div>
            <div className={s.dialogsMessages}>
                {messages}
                <div className={s.addMessage}>
                    <textarea className={s.textArea} rows={5} onChange={messageChange} value={messagesPage.newMessageText} placeholder={'type some text...'}></textarea>
                    <button className={s.addButton} onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    );
};

