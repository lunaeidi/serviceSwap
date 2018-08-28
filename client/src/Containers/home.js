import React, { Component } from 'react';
import Profile from './profile'
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

const P = styled.p`
margin-top: 5vh;
`
class Home extends Component {
  render() {
    return (
      <div>
        <Nav>
        <A>Signup</A>
        <A>Login</A>
      </Nav>
      <P>Welcome to ServiceSwap, where you can </P>
      </div>
    );
  }
}

export default Home;
