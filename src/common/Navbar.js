import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: gray;
  text-align: center;
  height: 1.3em;
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
`

class Navbar extends React.Component {
  render() {
    return (
      <Container>7A.m</Container>
    );
  }
}

export default Navbar