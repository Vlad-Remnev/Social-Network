import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IStore, store} from './redux/state'

let renderEntireTree = (state: IStore) => {
    ReactDOM.render(
        <App store={state}/>,
        document.getElementById('root'));
}

renderEntireTree(store)

store.subscribe(renderEntireTree)
