import ReactDOM  from 'react-dom';
import React from 'react';
import App from "./App"
import './_base.scss'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>

, document.getElementById('root'))