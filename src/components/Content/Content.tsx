import React, {FC} from 'react';
import {MainUser} from "./UserMain/UserMain";
import {PostsContainer} from "./Posts/PostsContainer";
import {IMainUser} from "../../redux/profile_reducer";

export interface IContent {
    profile: IMainUser | null
}

export const Content:FC<IContent> = ({profile}) => {
    return (
        <div>
            <MainUser profile={profile}/>
            <PostsContainer />
        </div>
    );
};