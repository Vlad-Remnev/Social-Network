import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AllActionTypes, IDialogsAll} from "../../redux/store";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs_reducer";

export interface IDialogs {
    state: IDialogsAll
    dispatch: (action: AllActionTypes) => void
}

export const Dialogs: FC<IDialogs> = ({state, dispatch}) => {

    let dialogs = state.dialogsData.map(dialog => <DialogItem key={dialog.id++} id={dialog.id} name={dialog.name}
                                                              avatar={dialog.avatar}/>)
    let messages = state.messageData.map(message => <Message key={message.id++} id={message.id} info={message.info}/>)

    // let newMessage = useRef<HTMLTextAreaElement>(null)

    const addNewMessageHandler = () => {
        // addNewMessage()
        dispatch(addMessageActionCreator())
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = event.currentTarget.value
        // updateMessageText(newMessage)
        dispatch(updateMessageActionCreator(event.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {dialogs}
            </div>
            <div className={s.dialogsMessages}>
                {messages}
                <div className={s.addMessage}>
                    <textarea className={s.textArea} rows={5} onChange={onMessageChange} value={state.newMessageText} placeholder={'type some text...'}></textarea>
                    <button className={s.addButton} onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    );
};

