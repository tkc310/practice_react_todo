import React, { Component } from 'react';

export default class Reset extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="button" value="リセット"
             onClick={this.props.onClick} />
    );
  }
}
