import React, { Component } from 'react';
import styled from 'styled-components'
class Signup extends Component {
  state={
    username: "",
    password:""
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
  fetch('http://localhost:2000/scores', {

              method: 'POST',
              body: JSON.stringify(postBody),

              headers:{
                  'Content-Type': 'application/json'
              }
          }).then(res => res.json())
                            .then(res => console.log(res),this.setState({submittedScore:true}) )
}
  render() {
    return(
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
