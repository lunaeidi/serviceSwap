import React, { Component } from 'react';
class Message extends Component{
  render() {
    return (
      <div>{this.props.selected}</div>
    );
  }
}

export default Message;
