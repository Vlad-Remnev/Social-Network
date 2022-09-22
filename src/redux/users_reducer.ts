import {IUser} from "../old/User/User";
import {Dispatch} from "redux";
import {userMainAPI, usersAPI} from "../api/api";

export interface IUsersAll {
    users: IUser[],
    pageSize: number,
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: IUsersAll = initialState, action: AllUserType): IUsersAll => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
            }
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}
        case "SET-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUserCount: action.payload.totalCount}
        case "TOGGLE-FETCHING":
            return {...state, isFetching: action.payload.fetching}
        case "SETTING-FOLLOW":
            return {
                ...state, followingInProgress: action.payload.setFollow
                    ? [...state.followingInProgress, action.payload.userId]
                    : [...state.followingInProgress.filter(id => id != action.payload.userId)]
            }
        default:
            return state
    }
}
export type AllUserType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetPageActionType
    | SetTotalCountActionType
    | IsFetchingActionType
    | SetFollowingActionType

export type FollowActionType = ReturnType<typeof followAccept>
export const followAccept = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {userId}
    } as const
}

export type UnFollowActionType = ReturnType<typeof unFollowAccept>
export const unFollowAccept = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userId}
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
    } as const
}

export type SetTotalCountActionType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {totalCount}
    } as const
}

export type IsFetchingActionType = ReturnType<typeof setFetching>
export const setFetching = (fetching: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        payload: {fetching}
    } as const
}

export type SetFollowingActionType = ReturnType<typeof setFollowing>
export const setFollowing = (setFollow: boolean, userId: number) => {
    return {
        type: 'SETTING-FOLLOW',
        payload: {
            setFollow,
            userId
        }
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number, pageNumber: number = 1) => {
    return (dispatch: Dispatch) => {
        dispatch(changePage(pageNumber))
        dispatch(setFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<AllUserType>) => {
        dispatch(setFollowing(true, userId))
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAccept(userId))
                }
                dispatch(setFollowing(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<AllUserType>) => {
        dispatch(setFollowing(true, userId))
        usersAPI.unFollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAccept(userId))
                }
                dispatch(setFollowing(false, userId))
            })
    }
}

export default usersReducer

