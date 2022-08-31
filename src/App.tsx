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
import store, {RootState} from "./redux/redux-store";

type AppPropsType =  {
    store: RootState
}

const App: FC<AppPropsType> = (props) => {
    const {dispatch} = store
    const {profilePage, messagesPage, aside } = props.store
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Content state={profilePage} dispatch={dispatch.bind(store)}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={messagesPage}  dispatch={dispatch.bind(store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </ BrowserRouter>
    );
}

export default App;
