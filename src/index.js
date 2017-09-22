import React from 'react';
import ReactDOM from 'react-dom';

//react-redux
import {Provider} from "react-redux";

import './index.css';
import "./styles/Home.css";
import 'antd/dist/antd.css';
import "./styles/Brand.css";
import "./styles/Classify.css"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//中间件 解决异步问题
import thunk from "redux-thunk";
//redux
import {createStore,combineReducers,applyMiddleware} from "redux";
import ReducerObj from "./reducers/Reducer";

const reducer = combineReducers(ReducerObj)
const store = createStore(reducer,applyMiddleware(thunk))

//设置监听store.subscript store发生改变就会执行renderPage
const renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));
}
renderPage()
store.subscribe(renderPage)
registerServiceWorker();
document.documentElement.style.fontSize = document.documentElement.clientWidth/10 + 'px';

