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
const HeaderInfoGrid = styled.div`
  display: Grid;
  font-weight: 900;
  font-size: 20px;
`
const InfoGrid = styled.div`
  display: Grid;
  font-size: 20px;
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
            <HeaderInfoGrid className='col-md-3'>
              Name : <br />
              Nickname :  <br />
              Age :  <br />
              Study : <br />
              </HeaderInfoGrid>
            <InfoGrid className='col-md-3'>
              Worawat Chueajedton <br />
              Aomsin  <br />
              20  <br />
              Kasetsaet University  <br />
              </InfoGrid>
            <HeaderInfoGrid className='col-md-3'>
              Nationality : <br />
              Bloodtype : <br />
              </HeaderInfoGrid>
            <InfoGrid className='col-md-3'>
              Thai <br />
              O <br />
              </InfoGrid>
          </div>
        </HeaderInfo>
      </Grid>
    );
  }
}

export default Info