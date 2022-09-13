import {combineReducers, createStore, Store} from "redux";
import profileReducer, {AddPostActionType, UpdatePostActionType} from "./profile_reducer";
import dialogsReducer, {AddNewPostActionType, UpdateMessageActionType} from "./dialogs_reducer";
import usersReducer, {FollowActionType, SetUsersActionType} from "./users_reducer";
import asideReducer from "./aside_reducer";
import {IPost} from "../components/Content/Posts/Post/Post";
import {IDialog} from "../components/Dialogs/DialogItem/DialogItem";
import {IMessage} from "../components/Dialogs/Message/Message";
import {IUser} from "../components/Users/User/User";

let allReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer
})

export type AllActionTypes = AddNewPostActionType |
    UpdateMessageActionType |
    AddPostActionType |
    UpdatePostActionType |
    FollowActionType |
    SetUsersActionType

export interface IProfileAll {
    postsData: IPost[]
    newPostText: string
}

export interface IDialogsAll {
    dialogsData: IDialog[]
    messageData: IMessage[]
    newMessageText: string
}

export interface IUsersAll {
    users: IUser[]
}

export type RootState = ReturnType<typeof allReducers>

let store: Store<RootState> = createStore(allReducers)

export default store