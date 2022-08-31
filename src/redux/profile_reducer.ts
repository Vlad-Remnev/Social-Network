import {AllActionTypes, IProfileAll} from "./state";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: IProfileAll, action: AllActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let post = {id: 3, message: state.newPostText, likes: 0}
            state.postsData.push(post)
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText
            return state
        }
        default: return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdatePostActionType = ReturnType<typeof updatePostActionCreator>

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }as const
}

export const updatePostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }as const
}

export default profileReducer