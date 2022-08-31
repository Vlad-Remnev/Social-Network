import React, {ChangeEvent, FC, useRef, useState} from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {AllActionTypes, IProfileAll} from "../../../redux/store";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile_reducer";

export interface IPosts {
    state: IProfileAll
    dispatch: (action: AllActionTypes) => void
}

export const Posts: FC<IPosts> = ({state, dispatch}) => {
    let postsElements = state.postsData.map(post => <Post key={post.id++} id={post.id} message={post.message} likes={post.likes}/>)
    // const [value, setValue] = useState('')
    // let newPost = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        // addPost()
        dispatch(addPostActionCreator())
    }

    console.log('post', state)

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        // updateNewPostText(event.currentTarget.value)
        dispatch(updatePostActionCreator(event.currentTarget.value))
    }

    return (
        <div>
            <div className={s.posts}>
                <div className={s.title}>Posts</div>
                <textarea id={'postCreate'}
                          onChange={onPostChange}
                          value={state.newPostText}
                          placeholder={'type some text...'}
                          // ref={newPost}
                />
                <button className={s.btn} onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.postAll}>
                {postsElements}
            </div>
        </div>
    );
};

