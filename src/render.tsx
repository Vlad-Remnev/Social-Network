import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addPost, IState, updateMessageText, updateNewPostText} from './redux/state'

export let renderEntireTree = (state: IState) => {
    ReactDOM.render(
        <App {...state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addNewMessage={addNewMessage}
             updateMessageText={updateMessageText}
        />,
    document.getElementById('root'));
}