
import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM,GET_TODOLISTACTION} from './actionTypes';
import axios from 'axios';
import store from './index'

export const changeInputAction = (value) =>({
    type:INPUT_CHANGE,
    value
});

export const addItem = () =>({
    type: ADD_ITEM,
})

export const deleteItem = (index) =>({
    type: DELETE_ITEM,
    index
})

export const getTodoListAction = (data) =>({
    type: GET_TODOLISTACTION,
    data
})

export const getTodoList = () => {
    return () => {
        axios.get('../.././data/data.json')
        .then((res)=>{
         const action = getTodoListAction(res.data);
         store.dispatch(action)
        })
    }
}
