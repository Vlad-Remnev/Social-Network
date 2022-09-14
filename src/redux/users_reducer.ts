import {AllActionTypes, IUsersAll} from "./redux-store";
import {IUser} from "../components/Users/User/User";

export

const initialState: IUsersAll = {
    users: [
        // {id: 1, followed: true, fullName: 'Vladislav', status: 'Everything is fine', location: {city: 'Gymri', country: 'Armenia'}},
        // {id: 2, followed: true, fullName: 'Masha', status: 'Working is fine', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: true, fullName: 'Svetlana', status: 'Oh my, bought a new Bag!!!!!', location: {city: 'Volzhsky', country: 'Russia'}},
        // {id: 4, followed: false, fullName: 'Stas', status: 'Vse po kaify(2007)', location: {city: 'Tbilisi', country: 'Georgia'}},
    ]
}

const usersReducer = (state: IUsersAll = initialState, action: AllActionTypes): IUsersAll => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: action.payload.follow} : user)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof followAc>
export const followAc = (userId: number, follow: boolean) => {
    return {
        type: 'FOLLOW',
        payload: {userId, follow}
    } as const
}

export type SetUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: IUser[]) => {
    return {
        type: 'SET-USERS',
        payload: {users}
    } as const
}

export default usersReducer

