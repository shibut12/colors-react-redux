import React from 'react';
import Box from '../component/box';

import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

class BoxCon extends React.Component{
    render(){
        return(
            <div>
                <Box 
                    color={this.props.color}
                    handleClick={this.props.loadColor}
                />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect(mapStateToProps, actionCreators)(BoxCon);