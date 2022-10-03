import {IDialog} from "../components/Dialogs/DialogItem/DialogItem";
import {IMessage} from "../components/Dialogs/Message/Message";

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export interface IDialogsAll {
    dialogsData: IDialog[]
    messageData: IMessage[]
    // newMessageText: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Svetlana', avatar: 'https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg'},
        {id: 2, name: 'Igor', avatar: 'https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg'},
        {id: 3, name: 'Vlad', avatar: 'https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg'},
        {id: 4, name: 'Alexey', avatar: 'https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg'},
        {id: 5, name: 'Stas', avatar: 'https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg'},
    ],
    messageData: [
        {id: 1, info: 'Hi'},
        {id: 2, info: 'How is your training in programming?'},
        {id: 3, info: 'Wish you luck)'},
    ],
    // newMessageText: ''
}

const dialogsReducer = (state: IDialogsAll = initialState, action: AllDialogsTypes) => {
    // if (action.type === ADD_MESSAGE) {
    //     let message = {id: 4, info: state.newMessageText}
    //     state.messageData.push(message)
    //     state.newMessageText = ''
    // } else if (action.type === UPDATE_MESSAGE_TEXT) {
    //     state.newMessageText = action.newText
    // }
    // return state
    switch (action.type) {
        case "ADD-MESSAGE": {
            let message = {id: (Math.random() * 1001), info: action.payload.newMessageBody}
            // state.messageData.push(message)
            // state.newMessageText = ''
            return {...state, messageData: [message, ...state.messageData]}
        }
        default: return state
    }
}

export type AllDialogsTypes = AddNewPostActionType

export type AddNewPostActionType = ReturnType<typeof onAddMessage>


export const onAddMessage = (newMessageBody: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            newMessageBody
        }
    }as const
}

export default dialogsReducer