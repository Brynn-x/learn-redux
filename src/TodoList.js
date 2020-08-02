import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const defaultState = {
  inputValue:"Write Something",
  list:["咯咯咯～", "哈哈哈～", "呼呼呼呼～","红红火火恍恍惚惚～～～"]
}

class TodoList extends React.Component {
  constructor(props){
    super(props)
    // console.log(store.getState())
 
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder={defaultState.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
          ></Input>
          <Button type="primary">增加</Button>
        </div>
        <div style={{ width: "300px", margin: "10px" }}>
          <List
            bordered
            dataSource={defaultState.list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          ></List>
        </div>
      </div>
    );
  }
 
}

export default TodoList;
