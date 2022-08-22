import {renderEntireTree} from "../render";
import {IPost} from "../components/Content/Posts/Post/Post";
import {IDialog} from "../components/Dialogs/DialogItem/DialogItem";
import {IMessage} from "../components/Dialogs/Message/Message";

export interface IState {
    profilePage: {
        postsData: IPost[]
        newPostText: string
    },
    messagesPage: {
        dialogsData: IDialog[]
        messageData: IMessage[]
        newMessageText: string
    }
}

export let state: IState = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Привет, как твои дела?', likes: 34},
            {id: 2, message: 'Сегодня был на выставке, впечатлительно!)))', likes: 10}
        ],
        newPostText: ''
    },
    messagesPage: {
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
}

export let addPost = () => {
    let post = {id: 3, message: state.profilePage.newPostText, likes: 0}
    state.profilePage.postsData.push(post)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export let addNewMessage = () => {
    let message = {id: 4, info: state.messagesPage.newMessageText}
    state.messagesPage.messageData.push(message)
    state.messagesPage.newMessageText = ''
    renderEntireTree(state)
}

export let updateMessageText = (newText: string) => {
    state.messagesPage.newMessageText = newText
    renderEntireTree(state)
}