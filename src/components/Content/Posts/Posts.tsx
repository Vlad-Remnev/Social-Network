import React, {ChangeEvent, FC, useRef, useState} from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "./PostsContainer";

// export interface IPosts {
//     state: IProfileAll
//     updatePostText: (text: string) => void
//     addNewPost: () => void
// }

export const Posts: FC<PostsPropsType> = ({profilePage, addNewPost, updatePostText}) => {
    let postsElements = profilePage.postsData.map(post => <Post key={post.id++} id={post.id} message={post.message} likes={post.likes}/>)
    // const [value, setValue] = useState('')
    // let newPost = useRef<HTMLTextAreaElement>(null)

    const onAddPostHandler = () => {
        addNewPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updatePostText(event.currentTarget.value)
    }

    return (
        <div>
            <div className={s.posts}>
                <div className={s.title}>Posts</div>
                <textarea id={'postCreate'}
                          onChange={onPostChange}
                          value={profilePage.newPostText}
                          placeholder={'type some text...'}
                          // ref={newPost}
                />
                <button className={s.btn} onClick={onAddPostHandler}>Add Post</button>
            </div>
            <div className={s.postAll}>
                {postsElements}
            </div>
        </div>
    );
};

