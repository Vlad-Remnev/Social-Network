import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

// export interface IDialogs {
//     state: IDialogsAll
//     onAddMessage: () => void
//     onMessageChange: (text: string) => void
// }

interface IForm {
    newMessageBody: string
}

export const Dialogs: FC<DialogsPropsType> = ({messagesPage, onAddMessage}) => {

    let dialogs = messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id++} id={dialog.id} name={dialog.name}
                                                                     avatar={dialog.avatar}/>)
    let messages = messagesPage.messageData.map(message => <Message key={message.id++} id={message.id}
                                                                    info={message.info}/>)
    // let newMessage = useRef<HTMLTextAreaElement>(null)
    // const addNewMessageHandler = () => {
    //     onAddMessage()
    // }
    //
    // const messageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     onMessageChange(event.currentTarget.value)
    // }

    const addMessage = (values: IForm) => {
        onAddMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsUsers}>
                {dialogs}
            </div>
            <div className={s.dialogsMessages}>
                {messages}
                <div className={s.addMessage}>
                    {/*<textarea className={s.textArea} rows={5} onChange={messageChange}*/}
                    {/*          value={messagesPage.newMessageText} placeholder={'type some text...'}></textarea>*/}
                    {/*<button className={s.addButton} onClick={addNewMessageHandler}>Add message</button>*/}
                    <AddMessageForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    );
};

const DialogsForm: FC<InjectedFormProps<IForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessage}>
                <Field component='textarea' name='newMessageBody' placeholder={'type some text...'} className={s.textArea}/>
                <button className={s.addButton}>Add message</button>
            </div>
        </form>
    )
}

const AddMessageForm = reduxForm<IForm>({
    form: 'dialogAddMessageForm'
})(DialogsForm)

