import React from 'react';
import Insert from './Insert.js';
import List from './List.js';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Insert />
        <List />
      </div>
    );
  }
}
