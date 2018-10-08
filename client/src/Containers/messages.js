import React, { Component } from 'react';
class Messages extends Component{
  componentDidMount(){
    fetch('http://localhost:2000/api/messages')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
  render() {

    return (

    );
  }
}

export default Messages;
