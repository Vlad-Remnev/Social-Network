import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import asideReducer from "./aside_reducer";

let allReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    aside: asideReducer
})

export type RootState = ReturnType<typeof allReducers>

let store: Store<RootState> = createStore(allReducers)

export default store