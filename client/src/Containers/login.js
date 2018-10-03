import React, { Component } from 'react';
import styled from 'styled-components'
import Redirect from 'react-router-dom'
class Signup extends Component {
  state={
    username: "",
    password:"",
    valid: null
  }
  handleUsername(event) {
  this.setState({
    username: event.target.value  //does event work here?
  });
};
handlePassword(event){
  this.setState({
    password: event.target.value
  })
}
handleSubmit(event){

  fetch('http://localhost:2000/api/users')
  .then(res => res.json())
  .then(res => res.map((user)=>{return user.username}).forEach((value)=>
  {if (value == this.state.username)
  {this.setState({valid: true})}}
  )
)

  //compare this.state.username to the ones given back in the res

}
  render() {
    return(
     // this.state.valid == true? <Redirect to= "/loggedinhome"> :
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
            <p>Username:<input value={this.state.username}onChange={(event) => this.handleUsername(event)}type="text" /></p>
            <p>Password:<input value={this.state.password}onChange={(event) => this.handlePassword(event)}type="password"/></p>

          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
};

export default Signup;
