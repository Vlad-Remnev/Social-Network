import {IPost} from "../components/Content/Posts/Post/Post";
import {Dispatch} from "redux";
import {profileAPI, userMainAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET_STATUS'

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
    // newPostText: string
    status: string
}

let initialState = {
    profile: null,
    postsData: [
        {id: 1, message: 'Привет, как твои дела?', likes: 34},
        {id: 2, message: 'Сегодня был на выставке, впечатлительно!)))', likes: 10}
    ],
    // newPostText: '',
    status: ''
}

const profileReducer = (state: IProfileAll = initialState, action: AllProfileTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let post = {id: 3, message: action.payload.newPostBody, likes: 0}
            return {...state, postsData: [post, ...state.postsData]}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET_STATUS": {
            return {...state, status: action.payload.status}
        }
        default: return state
    }
}

export type AllProfileTypes = AddPostActionType | SetUserProfileActionType | SetStatusActionType

export type AddPostActionType = ReturnType<typeof addNewPost>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>

export const addNewPost = (newPostBody: string) => {
    return {
        type: ADD_POST,
        payload: {
            newPostBody
        }
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

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
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

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer