import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BoxCon from './container/box-container';

class App extends Component{
    render(){
        return(
            <div>
                <BoxCon />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
