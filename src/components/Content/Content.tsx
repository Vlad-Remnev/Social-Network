import React, {FC} from 'react';
import {IPosts, Posts} from "./Posts/Posts";
import {User} from "./User/User";

type ContentTypeProps = IPosts

export const Content:FC<ContentTypeProps> = ({state, addPost, updateNewPostText}) => {
    return (
        <div>
            <User />
            <Posts state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    );
};