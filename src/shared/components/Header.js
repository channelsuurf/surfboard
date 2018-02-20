import React from 'react'
import styled from 'styled-components'

const PoetsenOne = styled.h1`
  color: white;
  font-family: 'poetsenoneregular', sans-serif;
  font-size: 4em;
  line-height: 1;
  letter-spacing: 3px;
  margin-bottom: 25px;
  text-shadow: -1px 0px black, 0 2px black, 2px 2px black, 0 -1px black;

  @media screen and (max-width: 576px) {
    font-size: 3em;
  }
`

const Header = props => <PoetsenOne>{props.children}</PoetsenOne>

export default Header
