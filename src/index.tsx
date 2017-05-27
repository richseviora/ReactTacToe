import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as Game from './components/game';
import './index.css';


// ========================================

ReactDOM.render(
    <Game.Game />,
    document.getElementById('example')
);