import React from 'react';
import './box.css';

class Box extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <div style={{backgroundColor:`${this.props.color}`}} className="box">
                    <button className="boxy-button" onClick={()=>this.props.handleClick()}>Change color</button>
                </div>
            </div>
        );
    }
}

export default Box;