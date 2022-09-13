import React, {FC} from 'react';
import {MainUser} from "./UserMain/UserMain";
import {PostsContainer} from "./Posts/PostsContainer";

// type PropsType = {
//     store :Store<RootState>
// }

export const Content = () => {
    return (
        <div>
            <MainUser />
            <PostsContainer />
        </div>
    );
};