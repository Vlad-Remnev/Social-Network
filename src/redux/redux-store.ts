import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";
import asideReducer from "./aside_reducer";
import authReducer from "./auth-reducer";


let allReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof allReducers>

let store: Store<RootState> = createStore(allReducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;

export default store