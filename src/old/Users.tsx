// import React, {FC} from 'react';
// import {UsersPropsType} from "../components/Users/UsersClassContainer/UsersContainer";
// import {User} from "./User/User";
// import s from "./User/User.module.css";
import axios from "axios";

// export const Users: FC<UsersPropsType> = ({users, totalUserCount, pageSize, onFollow, unFollow}) => {
//
//     let getUsers = () => {
        // if (users.length === 0) {
        //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //         .then(response => setUsers(response.data.items))
        // }
    // }
    //
    // const style = {
    //     margin: '0 auto',
    //     padding: '10px 0 10px 30px'
    // }
    // return (
    //     <div>
    //         <h2 style={style}>Users</h2>
    //         <button onClick={getUsers}>Get all users</button>
    //         {users.map(item => {
    //
    //             const onFollowUser = () => {
    //                 onFollow(item.id)
    //             }
    //
    //             const unFollowUser = () => {
    //                 unFollow(item.id)
    //             }
    //
    //             return <>
    //                 <div className={s.container} key={item.id}>
    //                     <div className={s.avatarContainer}>
    //                         <div className={s.avatar}>
    //                             <img src={item.photos.small ? item.photos.small : "https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg"} alt="PostManAvatar"/>
    //                         </div>
    //                         {item.followed
    //                             ? <button
    //                                 className={s.followStatus}
    //                                 onClick={onFollowUser}>
    //                                 Unfollow
    //                             </button>
    //                             : <button
    //                                 className={s.followStatus + ' ' + s.unFollowStatus}
    //                                 onClick={unFollowUser}>
    //                                 Follow
    //                             </button>}
    //                     </div>
    //                     <User
    //                         key={item.id}
    //                         id={item.id}
    //                         followed={item.followed}
    //                         photos={item.photos}
    //                         name={item.name}
    //                         uniqueUrlName={item.uniqueUrlName}
    //                         status={item.status}
    //                     />
    //                 </div>
    //             </>
    //         })}
    //     </div>
    // );
// };

export default () => {}