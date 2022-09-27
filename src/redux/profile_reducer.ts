import {IPost} from "../components/Content/Posts/Post/Post";
import {Dispatch} from "redux";
import {userMainAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'

export interface IMainUser {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export interface IProfileAll {
    profile: IMainUser | null
    postsData: IPost[]
    newPostText: string
}

let initialState = {
    profile: null,
    postsData: [
        {id: 1, message: 'Привет, как твои дела?', likes: 34},
        {id: 2, message: 'Сегодня был на выставке, впечатлительно!)))', likes: 10}
    ],
    newPostText: ''
}

const profileReducer = (state: IProfileAll = initialState, action: AllProfileTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let post = {id: 3, message: state.newPostText, likes: 0}
            return {...state, postsData: [post, ...state.postsData], newPostText: ''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        default: return state
    }
}

export type AllProfileTypes = AddPostActionType | UpdatePostActionType | setUserProfileActionType

export type AddPostActionType = ReturnType<typeof addNewPost>
export type UpdatePostActionType = ReturnType<typeof updatePostText>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>

export const addNewPost = () => {
    return {
        type: ADD_POST
    }as const
}

export const updatePostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }as const
}

export const setUserProfile = (profile: IMainUser) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    }as const
}

export const changeUserTemplate = (userId: string) => {
    return (dispatch: Dispatch) => {
        userMainAPI.changeUserTemplate(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export default profileReducer