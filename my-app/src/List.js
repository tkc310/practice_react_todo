import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = this.props.todo.map((todo, index) => {
      return (
        <li key={index}
            onClick={() => this.props.onClick(index)}>
          <input type="button" value="☓" />
          {todo.title}
        </li>
      )
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
}
