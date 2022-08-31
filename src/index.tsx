import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootState} from './redux/redux-store'

let renderEntireTree = (state:RootState) => {
    ReactDOM.render(
        <App store={state}/>,
        document.getElementById('root'));
}

renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})
