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
import {IStoreAll} from "./redux/state";

const App: FC<IStoreAll> = ({store}) => {
    const {addPost,updateNewPostText,updateMessageText,addNewMessage} = store
    const {profilePage, messagesPage} = store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Content state={profilePage} addPost={addPost.bind(store)}
                                                                  updateNewPostText={updateNewPostText.bind(store)}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={messagesPage} addNewMessage={addNewMessage.bind(store)}
                                                                  updateMessageText={updateMessageText.bind(store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </ BrowserRouter>
    );
}

export default App;
