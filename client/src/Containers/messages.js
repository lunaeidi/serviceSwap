import React, { Component } from 'react';
class Messages extends Component{
  state={
    messages: []
  }
  componentDidMount(){
    fetch('http://localhost:2000/api/messages')
    .then(res=>res.json())
    .then(json=>console.log(json)
    let messages=[]
    json.forEach((message)=>{
      let obj={}
      let key=message['sender'].username
      obj[key]= message['content']
      messages.push(obj)
    })
  )
  this.setState({messages:messages})
  }
  render() {

    return (

    );
  }
}

export default Messages;
