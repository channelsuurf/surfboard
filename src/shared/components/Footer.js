import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: #fcfcfc;
  padding: 25px;
  width: 100%;
`

const LinkContainer = styled.nav`
  display: flex;
  justify-content: space-around;

  a {
    color: black;
    padding: 5px;
  }
`

const Footer = (props) => (
  <FooterContainer>
    <LinkContainer>
      {props.children}
    </LinkContainer>
  </FooterContainer>
)

export default Footer
