import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootState} from './redux/redux-store'
import {Store} from "redux";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </ BrowserRouter>,
    document.getElementById('root'));

// let renderEntireTree = (state: Store<RootState>) => {
//ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={state}>
//             <App />
//         </Provider>
//     </ BrowserRouter>,
//     document.getElementById('root'));
// }

// renderEntireTree(store)

// store.subscribe(() => {
//     renderEntireTree(store)
// })
