let defaultState = {
    color: "red"
}

const mainReducer=(state=defaultState, action)=>{
    switch(action.type){
        case 'CHANGE_COLOR':
            return{
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}

export default mainReducer;