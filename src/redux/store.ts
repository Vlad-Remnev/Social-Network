import {IPost} from "../components/Content/Posts/Post/Post";
import {IDialog} from "../components/Dialogs/DialogItem/DialogItem";
import {IMessage} from "../components/Dialogs/Message/Message";
import profileReducer, {AddPostActionType, UpdatePostActionType} from "./profile_reducer";
import dialogsReducer, {AddNewPostActionType, UpdateMessageActionType} from "./dialogs_reducer";
import asideReducer from "./aside_reducer";

// export type AllActionTypes = AddNewPostActionType |
//                              UpdateMessageActionType |
//                              AddPostActionType |
//                              UpdatePostActionType

// export interface IStoreAll {
//     store: IStore
// }

// export interface IStore {
//     _state: IState
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addNewMessage: () => void
    // updateMessageText: (newText: string) => void
//     dispatch: (action: AllActionTypes) => void
//     subscribe: (observer: (state: IStore) => void) => void
//     renderEntireTree: (state: IStore) => void
//     getState: () => IState
// }

// export let store: IStore = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Привет, как твои дела?', likes: 34},
//                 {id: 2, message: 'Сегодня был на выставке, впечатлительно!)))', likes: 10}
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             dialogsData: [
//                 {id: 1, name: 'Svetlana', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//                 {id: 2, name: 'Igor', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//                 {id: 3, name: 'Vlad', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//                 {id: 4, name: 'Alexey', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//                 {id: 5, name: 'Stas', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//             ],
//             messageData: [
//                 {id: 1, info: 'Hi'},
//                 {id: 2, info: 'How is your training in programming?'},
//                 {id: 3, info: 'Wish you luck)'},
//             ],
//             newMessageText: ''
//         },
//         aside: {}
//     },
    // addPost() {
    //     let post = {id: 3, message: this._state.profilePage.newPostText, likes: 0}
    //     this._state.profilePage.postsData.push(post)
    //     this._state.profilePage.newPostText = ''
    //     this.renderEntireTree(this)
    // },
    // updateNewPostText( newText) {
    //     this._state.profilePage.newPostText = newText
    //     this.renderEntireTree(this)
    // },
    // addNewMessage() {
    //     let message = {id: 4, info: this._state.messagesPage.newMessageText}
    //     this._state.messagesPage.messageData.push(message)
    //     this._state.messagesPage.newMessageText = ''
    //     this.renderEntireTree(this)
    // },
    // updateMessageText(newText) {
    //     this._state.messagesPage.newMessageText = newText
    //     this.renderEntireTree(this)
    // },
    // dispatch(action) {
    //     this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    //     this._state.aside = asideReducer(this._state.aside, action)
    //     this.renderEntireTree(this)
        // if(action.type === 'ADD-POST') {
        //     let post = {id: 3, message: this._state.profilePage.newPostText, likes: 0}
        //     this._state.profilePage.postsData.push(post)
        //     this._state.profilePage.newPostText = ''
        //     this.renderEntireTree(this)
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this.renderEntireTree(this)
        // } else if (action.type === 'ADD-MESSAGE') {
        //     let message = {id: 4, info: this._state.messagesPage.newMessageText}
        //     this._state.messagesPage.messageData.push(message)
        //     this._state.messagesPage.newMessageText = ''
        //     this.renderEntireTree(this)
        // } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        //     this._state.messagesPage.newMessageText = action.newText
        //     this.renderEntireTree(this)
        // }
//     },
//     subscribe(observer) {
//         this.renderEntireTree = observer
//     },
//     renderEntireTree(state) {
//         console.log('State change')
//     },
//     getState() {
//         return this._state
//     }
// }

// let renderEntireTree = (state: IState) => {
//     console.log('State change')
// }
//
// export let state: IState = {
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'Привет, как твои дела?', likes: 34},
//             {id: 2, message: 'Сегодня был на выставке, впечатлительно!)))', likes: 10}
//         ],
//         newPostText: ''
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: 1, name: 'Svetlana', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//             {id: 2, name: 'Igor', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//             {id: 3, name: 'Vlad', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//             {id: 4, name: 'Alexey', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//             {id: 5, name: 'Stas', avatar: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg'},
//         ],
//         messageData: [
//             {id: 1, info: 'Hi'},
//             {id: 2, info: 'How is your training in programming?'},
//             {id: 3, info: 'Wish you luck)'},
//         ],
//         newMessageText: ''
//     }
// }
//
// export const addPost = () => {
//     let post = {id: 3, message: state.profilePage.newPostText, likes: 0}
//     state.profilePage.postsData.push(post)
//     state.profilePage.newPostText = ''
//     renderEntireTree(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     renderEntireTree(state)
// }
//
// export const addNewMessage = () => {
//     let message = {id: 4, info: state.messagesPage.newMessageText}
//     state.messagesPage.messageData.push(message)
//     state.messagesPage.newMessageText = ''
//     renderEntireTree(state)
// }
//
// export const updateMessageText = (newText: string) => {
//     state.messagesPage.newMessageText = newText
//     renderEntireTree(state)
// }
//
// export const subscribe = (observer: (state: IState) => void) => {
//     renderEntireTree = observer
// }

export default () => {}
