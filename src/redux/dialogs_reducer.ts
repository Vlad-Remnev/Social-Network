import {AllActionTypes, IDialogsAll} from "./redux-store";

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Svetlana', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
        {id: 2, name: 'Igor', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
        {id: 3, name: 'Vlad', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
        {id: 4, name: 'Alexey', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
        {id: 5, name: 'Stas', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
    ],
    messageData: [
        {id: 1, info: 'Hi'},
        {id: 2, info: 'How is your training in programming?'},
        {id: 3, info: 'Wish you luck)'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state: IDialogsAll = initialState, action: AllActionTypes) => {
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
            let message = {id: 4, info: state.newMessageText}
            // state.messageData.push(message)
            // state.newMessageText = ''
            return {...state, messageData: [message, ...state.messageData] , newMessageText: ''}
        }
        case "UPDATE-MESSAGE-TEXT": {
            // state.newMessageText = action.newText
            return {...state, newMessageText: action.newText}
        }
        default: return state
    }
}

export type AddNewPostActionType = ReturnType<typeof addMessageActionCreator>
export type UpdateMessageActionType = ReturnType<typeof updateMessageActionCreator>


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }as const
}
export const updateMessageActionCreator = (newText: string) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    }as const
}

export default dialogsReducer