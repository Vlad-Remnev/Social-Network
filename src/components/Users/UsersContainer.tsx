import {connect} from "react-redux";
import {Users} from "./Users";
import {IUsersAll, RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAc, setUsers} from "../../redux/users_reducer";
import {IUser} from "./User/User";
import UsersClass from "./UsersClass";

interface MapStateToProps {
    usersPage: IUsersAll
}

interface MapDispatchToProps {
    onFollow: (userId: number, follow: boolean) => void
    setUsers: (users: IUser[]) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: RootState): MapStateToProps => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onFollow: (userId: number, follow: boolean) => {
            dispatch(followAc(userId, follow))
        },
        setUsers: (users: IUser[]) => {
            dispatch(setUsers(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)