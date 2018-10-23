import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
padding: 5em;
`

const SkillHeader = styled.div`
text-align: left;
font-size: 50px;
font-style: italic;
font-weight: bold;
`

const Bar = styled.div`
position: relative;
max-width: 800px;
height: 400px;
background: #ddd;
`
const line = styled.div`
position: absolute;
width: 2px;
top: 0;
bottom: 0;
left: 10;
background: rgba(0,0,0,0.1);
`

class SkillBar extends React.Component {
    render() {
      return (
          <Block>
            <SkillHeader>Skill</SkillHeader>
            <Bar />
            <line/>
          </Block>
      );
    }
  }
  
  export default SkillBar