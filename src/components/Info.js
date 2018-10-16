import React from 'react'
import styled from 'styled-components'
import Myface from '../assets/Photo/face.jpg'

const Grid = styled.div`
  padding: 4em;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 5em;
  padding-left: 1.5em;
`
const InfoGrid = styled.div`
  display: Grid;
`

const Picture = styled.img`
  width: 20em;
  height: 20em;
`
const HeaderInfo = styled.div`
  text-align: left;
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
`
const Line = styled.hr`
  width: 100%;
  text-align: left;
  padding-top: 1.75px;
  margin-top: 0.25em;
  background-color: black;
  size: 5em;
`
const Name = styled.div`
 font-size: 20px;
 font-weight: bold;
 width: 10%;
 padding-right: 90%;
 margin-right: 90%;
 white-space: nowrap;
 display: inline;
`
const MyName = styled.div`
 font-size: 20px;
 display: inline-block;
`

class Info extends React.Component {
  render() {
    return (
      <Grid>
        <Picture src={Myface} alt="" />
        <HeaderInfo>Info
          <Line />
            <div className='modal-body row'>
              <InfoGrid className='col-md-6'>
              sdlm;f;ldm
              </InfoGrid>
              <InfoGrid className='col-md-6'>
              sdlm;f;ldm
              </InfoGrid>
            </div>
        </HeaderInfo>
      </Grid>
    );
  }
}

export default Info