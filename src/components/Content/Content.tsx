import React, {FC} from 'react';
import {IPosts, Posts} from "./Posts/Posts";
import {User} from "./User/User";

type ContentTypeProps = IPosts

export const Content:FC<ContentTypeProps> = ({state, dispatch}) => {
    return (
        <div>
            <User />
            <Posts state={state} dispatch={dispatch}/>
        </div>
    );
};