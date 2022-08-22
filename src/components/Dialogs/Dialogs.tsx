import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, IDialog} from "./DialogItem/DialogItem";
import {IMessage, Message} from "./Message/Message";

export interface IDialogs {
    state: {
        dialogsData: IDialog[]
        messageData: IMessage[]
        newMessageText: string
    }
    addNewMessage: () => void
    updateMessageText: (newText: string) => void
}


export const Dialogs: FC<IDialogs> = ({state, updateMessageText, addNewMessage}) => {

    let dialogs = state.dialogsData.map(dialog => <DialogItem key={dialog.id++} id={dialog.id} name={dialog.name}
                                                              avatar={dialog.avatar}/>)
    let messages = state.messageData.map(message => <Message key={message.id++} id={message.id} info={message.info}/>)

    let newMessage = useRef<HTMLTextAreaElement>(null)

    const addNewMessageHandler = () => {
        addNewMessage()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = event.currentTarget.value
        updateMessageText(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {dialogs}
            </div>
            <div className={s.dialogsMessages}>
                {messages}
                <div className={s.addMessage}>
                    <textarea className={s.textArea} ref={newMessage} rows={5} onChange={onMessageChange} value={state.newMessageText}></textarea>
                    <button className={s.addButton} onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    );
};

