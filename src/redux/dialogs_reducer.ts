import {AllActionTypes, IDialogsAll} from "./state";

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state: IDialogsAll, action: AllActionTypes) => {
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
            state.messageData.push(message)
            state.newMessageText = ''
            return state
        }
        case "UPDATE-MESSAGE-TEXT": {
            state.newMessageText = action.newText
            return state
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