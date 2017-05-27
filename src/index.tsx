import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as Game from './components/game';
import './index.css';

let store = createStore(Game.appReducer);

// ========================================

ReactDOM.render(
    <Provider store={store}>
        <Game.Game/>
    </Provider>,
    document.getElementById('example')
);