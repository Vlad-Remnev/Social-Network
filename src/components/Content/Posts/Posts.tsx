import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.title}>Posts</div>
                <textarea id={'postCreate'} placeholder={'type some text...'}/>
                <button>Add Post</button>
            </div>
            <div className={s.postAll}>
                <Post message={'Привет, как твои дела?'} likes={34}/>
                <Post message={'Сегодня был на выставке, впечатлительно!)))'} likes={10}/>
            </div>
        </div>
    );
};

