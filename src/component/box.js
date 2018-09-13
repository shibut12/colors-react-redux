import React from 'react';
import './box.css';

class Box extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div className="box">
                    <button className="boxy-button">Change color</button>
                </div>
            </div>
        );
    }
}

export default Box;