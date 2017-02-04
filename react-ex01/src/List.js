import React from 'react';
import axios from 'axios';

export default class Insert extends React.Component{
  constructor(){
    super();
    this.state = {
      todoList : []
    };
  }
  componentDidMount(){
    axios.get('/todos')
    .then((response) => {
      this.setState({todoList : response.data});
    })
    .catch((response) => console.log("error : "+ response));
  }
  render(){
    return (
      <div>
        <ul>
          {this.state.todoList.map((todos, i) => {
            return (<TodoItem title={todos.title}
                              content = {todos.content}
                              key={i}/>);
          })}
        </ul>
      </div>
    );
  }
}

class TodoItem extends React.Component{
  render() {
    return(
      <li>title : {this.props.title} / content : {this.props.content}</li>
    )
  }
}
