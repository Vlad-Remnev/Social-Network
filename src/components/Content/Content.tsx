import React, {FC} from 'react';
import {MainUser} from "./UserMain/MainUser";
import {PostsContainer} from "./Posts/PostsContainer";
import {IMainUser} from "../../redux/profile_reducer";

export interface IContent {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
}

export const Content:FC<IContent> = ({profile, status, updateStatus}) => {
    return (
        <div>
            <MainUser profile={profile} status={status} updateStatus={updateStatus}/>
            <PostsContainer />
        </div>
    );
};