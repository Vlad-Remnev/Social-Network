import React, {FC} from 'react';
import s from "./Post.module.css";

export interface IPost {
    id: number
    message: string
    likes: number
}

export const Post:FC<IPost> = ({id, message, likes}) => {
    return (
        <div className={s.post} key={id}>
            <div className={s.avatar}>
                <img src="https://pbs.twimg.com/media/DqsHCtWXQAYygYP.jpg" alt="PostManAvatar"/>
            </div>
            <div className={s.postInfo}>
                <div>{message}</div>
                <div>Likes: {likes}</div>
            </div>
        </div>
    );
};

