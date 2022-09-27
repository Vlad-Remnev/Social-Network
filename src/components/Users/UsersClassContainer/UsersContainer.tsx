import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {setFollowing, getUsersThunkCreator, follow, unfollow} from "../../../redux/users_reducer";
import {IUser} from "../../../old/User/User";
import React from "react";
import {UsersRender} from "./UsersRender";
import {Preloader} from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

interface MapStateToProps {
    users: IUser[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

interface MapDispatchToProps {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFollowing: (setFollow: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number, pageNumber?: number) => void
}

export type UsersPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: RootState): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    componentDidMount() {
        // this.props.setFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalCount(data.totalCount)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        // this.props.changePage(pageNumber)
        // this.props.setFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize, pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <UsersRender users={this.props.users}
                             totalUserCount={this.props.totalUserCount}
                             currentPage={this.props.currentPage}
                             pageSize={this.props.pageSize}
                             onPageChange={this.onPageChange}
                             onFollow={this.props.follow}
                             unFollow={this.props.unfollow}
                             followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

// export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setFollowing, getUsers: getUsersThunkCreator})(UsersClass))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setFollowing, getUsers: getUsersThunkCreator}),
    withAuthRedirect
)(UsersClass)