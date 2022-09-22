import {Dispatch} from "redux";
import {userMainAPI} from "../api/api";

export interface IAuth {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: IAuth = initialState, action: SetUserDataActionType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, userId: action.payload.data.userId, email: action.payload.data.email, login: action.payload.data.login, isAuth: true}
        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data: {
                userId,
                email,
                login
            }
        }
    } as const
}

export const authMainUser = () => {
    return (dispatch: Dispatch) => {
        userMainAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer