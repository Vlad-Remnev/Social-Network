import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {Posts} from "./Posts";
import {addNewPost, IProfileAll} from "../../../redux/profile_reducer";


// export interface IPostsContainer {
//     store: Store<RootState>
// }

// export const PostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//             const state = store.getState().profilePage
//             const addNewPost = () => {
//                 store.dispatch.call(store, addPostActionCreator())
//             }
//             const onPostChange = (text: string) => {
//                 store.dispatch.call(store, updatePostActionCreator(text))
//             }
//         return (
//             <Posts state={state}
//                    updatePostText={onPostChange}
//                    addNewPost={addNewPost}/>
//         )}}
//         </StoreContext.Consumer>
//     );
// };

interface MapStateToProps {
    profilePage: IProfileAll
}

interface MapDispatchToProps {
    addNewPost: (newPostBody: string) => void,
}

export type PostsPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: RootState): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         addNewPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updatePostText: (text) => {
//             dispatch(updatePostActionCreator(text))
//         }
//     }
// }

export const PostsContainer = connect(mapStateToProps, {addNewPost})(Posts)