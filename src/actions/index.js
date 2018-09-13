import axios from 'axios';

import * as types from './action-types';

export function loadColor() {
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(changeColor("#"+response.data.new_color))
        })
    }
}

export function changeColor(color){
    return{
        type: types.CHANGE_COLOR,
        color
    }
}