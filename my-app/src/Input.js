import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textValue: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({textValue: event.target.value});
  }

  handleClick() {
    this.props.onClick(this.state.textValue)
    this.state.textValue = ''
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.textValue} />
        <input type="button" value="追加"
               onClick={this.handleClick} />
      </div>
    );
  }
}
