import React, {ChangeEvent, FC, useRef} from 'react';
import s from './Posts.module.css'
import {IPost, Post} from "./Post/Post";

export interface IPosts {
    state: {
        postsData: IPost[]
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Posts: FC<IPosts> = ({state, addPost, updateNewPostText}) => {
    let postsElements = state.postsData.map(post => <Post key={post.id++} id={post.id} message={post.message} likes={post.likes}/>)

    let newPost = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = event.currentTarget.value
        updateNewPostText(newPost)
    }

    return (
        <div>
            <div className={s.posts}>
                <div className={s.title}>Posts</div>
                <textarea id={'postCreate'}
                          onChange={onPostChange}
                          value={state.newPostText}
                          placeholder={'type some text...'}
                          ref={newPost}
                />
                <button className={s.btn} onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.postAll}>
                {postsElements}
            </div>
        </div>
    );
};

