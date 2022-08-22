import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {IDialog} from "./components/Dialogs/DialogItem/DialogItem";
import {IPost} from "./components/Content/Posts/Post/Post";
import {IMessage} from "./components/Dialogs/Message/Message";
import {updateNewPostText} from "./redux/state";

export interface IApp {
    profilePage: {
        postsData: IPost[]
        newPostText: string
    }
    messagesPage: {
        dialogsData: IDialog[]
        messageData: IMessage[]
        newMessageText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addNewMessage: () => void
    updateMessageText: (newText: string) => void
}

const App: FC<IApp> = ({
                           profilePage,
                           messagesPage,
                           addPost,
                           updateNewPostText,
                           addNewMessage,
                           updateMessageText
                       }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Content state={profilePage} addPost={addPost}
                                                                  updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={messagesPage} addNewMessage={addNewMessage}
                                                                  updateMessageText={updateMessageText}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </ BrowserRouter>
    );
}

export default App;
