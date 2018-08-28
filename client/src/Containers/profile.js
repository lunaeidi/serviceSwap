import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: green;
  display: flex;
  color: yellow;
  justify-content: flex-end;
`
const A =styled.a`
  padding: .8vw;
  font-weight: bold;
  `

class Profile extends Component {
  componentDidMount(){
    fetch('api/users')
      .then(res => res.json())
      .then(json=>{console.log(json)})
  }
  render() {
    return (
      <div>
      <Nav>
        <A>Logout</A>
        <A>Home</A>
        <A>Search</A>
        <A>Profile</A>
        <A><img src="../../public/envelope.svg"></img></A>
        <A></A>
      </Nav>
      
      </div>
    );
  }
}

export default Profile;
