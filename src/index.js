import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BoxCon from './container/box-container';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

let store = createStore(reducers, applyMiddleware(thunk));


class App extends Component{
    render(){
        return(
            <div>
                <BoxCon />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
