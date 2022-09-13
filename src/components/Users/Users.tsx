import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User/User";
import s from "./User/User.module.css";

export const Users: FC<UsersPropsType> = ({usersPage, setUsers, onFollow}) => {

    const users = usersPage.users.map(item => {

        const onFollowUser = () => {
            onFollow(item.id, !item.followed)
        }

        return <div className={s.container} key={item.id}>
                <div className={s.avatarContainer}>
                    <div className={s.avatar}>
                        <img src="https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg" alt="PostManAvatar"/>
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
                    fullName={item.fullName}
                    location={item.location}
                    status={item.status}
                />
            </div>
    })

    const style = {
        margin: '0 auto',
        padding: '10px 0 10px 30px'
    }
    return (
        <div>
            <h2 style={style}>Users</h2>
            {users}
        </div>
    );
};