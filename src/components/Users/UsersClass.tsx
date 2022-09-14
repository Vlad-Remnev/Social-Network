import React from 'react'
import s from "./User/User.module.css";
import {User} from "./User/User";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class UsersClass extends React.Component<UsersPropsType>{
    //продолжить на 55
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                {this.props.usersPage.users.map(item => {
                    const onFollowUser = () => {
                        this.props.onFollow(item.id, !item.followed)
                    }

                    return <div className={s.container} key={item.id}>
                            <div className={s.avatarContainer}>
                                <div className={s.avatar}>
                                    <img src={item.photos.small ? item.photos.small : "https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg"} alt="PostManAvatar"/>
                                </div>
                                <button
                                    className={item.followed ? s.followStatus : s.followStatus + ' ' + s.unFollowStatus}
                                    onClick={onFollowUser}
                                >
                                    {item.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                            <User
                                key={item.id}
                                id={item.id}
                                followed={item.followed}
                                photos={item.photos}
                                name={item.name}
                                uniqueUrlName={item.uniqueUrlName}
                                status={item.status}
                            />
                        </div>
                })}
            </div>
        );
    }
}

export default UsersClass