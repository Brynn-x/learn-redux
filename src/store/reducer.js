import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM,GET_TODOLISTACTION} from './actionTypes';
 
const defaultState = {
    inputValue: "",
    list:[""]
}

export default (state = defaultState,action) =>{
    if(action.type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }

    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    if(action.type === GET_TODOLISTACTION){
        let newState = action.data;
        return newState;
    }

    return state;
}
