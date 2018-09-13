import * as types from '../actions/action-types';

let defaultState = {
    color: "red"
}

const mainReducer=(state=defaultState, action)=>{
    switch(action.type){
        case types.CHANGE_COLOR:
            return{
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}

export default mainReducer;