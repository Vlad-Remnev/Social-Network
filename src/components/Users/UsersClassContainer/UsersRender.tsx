import React, {FC} from 'react';
import s from "../../../old/User/User.module.css";
import {NavLink, Route} from "react-router-dom";

export interface IUser {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

interface IUsersRender {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: IUser[]
    onFollow: (userId: number, follow: boolean) => void
}

export const UsersRender: FC<IUsersRender> = ({
                                                  users,
                                                  totalUserCount,
                                                  pageSize,
                                                  currentPage,
                                                  onPageChange,
                                                  onFollow
                                              }) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <h2>Users</h2>
            {pages.map(page => <span key={page}
                                     className={page === currentPage ? s.pagination + ' ' + s.active : s.pagination}
                                     onClick={() => onPageChange(+page)}>{page}</span>)}
            {users.map(item => {
                const onFollowUser = () => {
                    onFollow(item.id, !item.followed)
                }

                return <div className={s.container} key={item.id}>
                    <div className={s.avatarContainer}>
                        <div className={s.avatar}>
                            <NavLink to={`/profile/${item.id}`}>
                                <img
                                    src={item.photos.small ? item.photos.small : "https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg"}
                                    alt="PostManAvatar"/>
                            </NavLink>
                        </div>
                        <button
                            className={item.followed ? s.followStatus : s.followStatus + ' ' + s.unFollowStatus}
                            onClick={onFollowUser}
                        >
                            {item.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                    <div className={s.item}>
                        <div className={s.info}>
                            <div className={s.name}>{item.name}</div>
                            <div className={s.status}><i>{item.status}</i></div>
                        </div>
                        <div className={s.location}>
                            <div className={s.name}>Gymri</div>
                            <div className={s.status}>Armenia</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};