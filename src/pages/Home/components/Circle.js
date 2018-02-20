import React from 'react'
import styled from 'styled-components'

const RoundedDiv = styled.div`
  background-color: ${props => props.bg || 'black'};
  border: solid 2px white;
  border-radius: 50%;
  display: inline-block;
  height: ${props => props.height || '25px'};
  margin: 7.5px;
  width: ${props => props.width || '25px'};

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

const Circle = props => (
  <RoundedDiv
    {...props}
    onClick={() => props.onClick(props.bg)}
    onMouseOver={() => props.onMouseOver(props.bg)}
    onMouseOut={props.onMouseOut}
  />
)

export default Circle
