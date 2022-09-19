import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {onFollow, unFollow, changePage, setTotalCount, setUsers, setFetching} from "../../../redux/users_reducer";
import {IUser} from "../../../old/User/User";
import React from "react";
import axios from "axios";
import {UsersRender} from "./UsersRender";
import {Preloader} from "../../common/Preloader/Preloader";

interface MapStateToProps {
    users: IUser[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

interface MapDispatchToProps {
    onFollow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: IUser[]) => void
    changePage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (fetching: boolean) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: RootState): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         onFollow: (userId, follow) => {
//             dispatch(followAc(userId, follow))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         changePage: (currentPage) => {
//             dispatch(setPage(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCount(totalCount))
//         },
//         setFetching: (fetching) => {
//             dispatch(toggleFetching(fetching))
//         }
//     }
// }

class UsersClass extends React.Component<UsersPropsType> {
    //продолжить на 55
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.changePage(pageNumber)
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : null}
                <UsersRender users={this.props.users}
                             totalUserCount={this.props.totalUserCount}
                             currentPage={this.props.currentPage}
                             pageSize={this.props.pageSize}
                             onPageChange={this.onPageChange}
                             onFollow={this.props.onFollow}
                             unFollow={this.props.unFollow}
                />
            </>
        );
    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

export const UsersContainer = connect(mapStateToProps, {
    onFollow,
    setUsers,
    changePage,
    setTotalCount,
    setFetching,
    unFollow
})(UsersClass)