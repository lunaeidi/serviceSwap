import React, { Component } from 'react';
import Message from '../../components/message'
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
  selectHandler(event){
    this.setState({selected:event.value})
  }
  render() {
    return (
<div>
{this.state.messages.map((message)=>{"test"})}
<Message
selected= {this.prop.selected}
>
</div>
    );
  }
}

export default Messages;
