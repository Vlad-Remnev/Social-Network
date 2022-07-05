import React, {FC} from 'react';
import s from "./Post.module.css";

interface IPost {
    message: string
    likes: number
}

export const Post:FC<IPost> = ({message, likes}) => {
    return (
        <div className={s.post}>
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

