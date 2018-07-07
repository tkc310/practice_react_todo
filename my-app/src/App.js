import React, { Component } from 'react';

import List from './List'
import Input from './Input'

class App extends Component {
  constructor(props){
    super(props);

    const todoStorage = localStorage.getItem('todo');
    const todoList = todoStorage ? JSON.parse(todoStorage)
                     : [];

    this.state = {
      todo: todoList
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  syncStorage() {
    const json = JSON.stringify(this.state.todo);
    localStorage.setItem('todo', json)
  }

  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({title: value});
    // 保存
    this.setState({todo : this.state.todo});
    // ローカルストレージに保存
    this.syncStorage();
  }

  // 削除機能
  deleteTodo(idx) {
    console.log(idx);
    // 削除
    this.state.todo.splice(idx, 1);
    // 保存
    this.setState({todo: this.state.todo});
    // ローカルストレージに保存
    this.syncStorage();
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <List todo={this.state.todo}
              onClick={this.deleteTodo} />
        <Input onClick={this.addTodo} />
      </div>
    );
  }
}

export default App;
