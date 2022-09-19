import {IUser} from "../old/User/User";

export interface IUsersAll {
    users: IUser[],
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: IUsersAll = {
    users: [
        // {id: 1, followed: true, fullName: 'Vladislav', status: 'Everything is fine', location: {city: 'Gymri', country: 'Armenia'}},
        // {id: 2, followed: true, fullName: 'Masha', status: 'Working is fine', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: true, fullName: 'Svetlana', status: 'Oh my, bought a new Bag!!!!!', location: {city: 'Volzhsky', country: 'Russia'}},
        // {id: 4, followed: false, fullName: 'Stas', status: 'Vse po kaify(2007)', location: {city: 'Tbilisi', country: 'Georgia'}},
    ],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: IUsersAll = initialState, action: AllUserType): IUsersAll => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: action.payload.follow} : user)}
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}
        case "SET-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUserCount: action.payload.totalCount}
        case "TOGGLE-FETCHING":
            return {...state, isFetching: action.payload.fetching}
        default:
            return state
    }
}
export type AllUserType = FollowActionType | SetUsersActionType | SetPageActionType | SetTotalCountActionType | IsFetchingActionType

export type FollowActionType = ReturnType<typeof onFollow>
export const onFollow = (userId: number, follow: boolean) => {
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

export type SetPageActionType = ReturnType<typeof changePage>
export const changePage = (currentPage: number) => {
    return {
        type: 'SET-PAGE',
        payload: {currentPage}
    }as const
}

export type SetTotalCountActionType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {totalCount}
    }as const
}

export type IsFetchingActionType = ReturnType<typeof setFetching>
export const setFetching = (fetching: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        payload: {fetching}
    }as const
}

export default usersReducer

