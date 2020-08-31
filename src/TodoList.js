import React from "react";
import store from  './store/index';
import {changeInputAction,addItem,deleteItem,getTodoList} from './store/actionCreators';
import TodoListUI from "./TodoListUI";

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  changeInput(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  clickBtn(){
    const action = addItem()
    store.dispatch(action);
  }
  deleteItem(index){
    const action = deleteItem(index)
    store.dispatch(action);
    console.log(index)
  }
  componentDidMount(){
   const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    return (
     <TodoListUI
     inputValue={this.state.inputValue}
     changeInput={this.changeInput}
     clickBtn={this.clickBtn}
     list={this.state.list}
     deleteItem={this.deleteItem}
     />
    );
  }
}

export default TodoList;
