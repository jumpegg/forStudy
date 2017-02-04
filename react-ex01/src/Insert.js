import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class Insert extends React.Component{
  todoSubmit(){
    axios.post('/todos',{
      title : this.refs.title.value,
      content : this.refs.content.value
    })
    .then((response) => {
      if(response.data.message){
        location.reload();
      }
    })
    .catch((response) => console.log("error : "+ response));
  }
  render(){
    return (
      <div>
        <input ref='title' placeholder='title' />
        <input ref='content' placeholder='content' />
        <button type="button" onClick={this.todoSubmit.bind(this)}>submit</button>
      </div>
    );
  }
}
