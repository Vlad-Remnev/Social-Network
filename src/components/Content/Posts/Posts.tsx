import React, {FC} from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "./PostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

// export interface IPosts {
//     state: IProfileAll
//     updatePostText: (text: string) => void
//     addNewPost: () => void
// }

interface IForm {
    newPostBody: string
}

export const Posts: FC<PostsPropsType> = ({profilePage, addNewPost}) => {
    let postsElements = profilePage.postsData.map(post => <Post key={post.id++} id={post.id} message={post.message}
                                                                likes={post.likes}/>)
    // const [value, setValue] = useState('')
    // let newPost = useRef<HTMLTextAreaElement>(null)
    //
    // const onAddPostHandler = () => {
    //     addNewPost()
    // }
    //
    // const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     updatePostText(event.currentTarget.value)
    // }

    const addPost = (values: IForm) => {
        addNewPost(values.newPostBody)
    }

    return (
        <div>
            <div className={s.posts}>
                <div className={s.title}>Posts</div>
                {/*<textarea id={'postCreate'}*/}
                {/*          onChange={onPostChange}*/}
                {/*          value={profilePage.newPostText}*/}
                {/*          placeholder={'type some text...'}*/}
                {/*    // ref={newPost}*/}
                {/*/>*/}
                {/*<button className={s.btn} onClick={onAddPostHandler}>Add Post</button>*/}
                <AddPostForm onSubmit={addPost}/>
            </div>
            <div className={s.postAll}>
                {postsElements}
            </div>
        </div>
    );
};

const PostsForm: FC<InjectedFormProps<IForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostBody' placeholder={'type some text...'}/>
            <button className={s.btn}>Add Post</button>
        </form>
    )
}

const AddPostForm = reduxForm<IForm>({
    form: 'postAddForm'
})(PostsForm)