import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Circle from './containers/Circle'
import Header from '../../shared/components/Header'
import Mailchimp from './components/Mailchimp'
import Meta from '../../shared/components/Meta'

import background from '../../assets/images/background.png'

const Container = styled.main`
  background-color: #fcfcfc;
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const LeftSection = styled.section`
  background-color: ${props => props.color};
  min-height: 50vh;
  padding-top: 2vh;
  position: relative;
  text-align: center;
  transition: all 0.23s ease-in-out 0s;
  width: 100%;

  @media (min-width: 992px) {
    min-height: 100vh;
    padding-top: 25vh;
    width: 60%;
  }
`

const RightSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  display: block;
  padding-top: 5vh;
  min-height: 40vh;
  max-height: 100vh;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 40%;
  }
`

const SubHeader = styled.h2`
  color: black;
  max-width: 75%;
  margin: 25px auto 0;
`

const Highlight = styled.mark`
  background-color: #fcfcfc;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  line-height: 2;
  padding: 5px;
`

const Footer = styled.div`
  background-color: #fcfcfc;
  display: block;
  position: static;
  padding: 25px;
  width: 100%;

  @media (min-width: 992px) {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 60%;
  }
`

const LinkContainer = styled.nav`
  display: flex;
  justify-content: space-around;

  a {
    color: black;
    padding: 5px;
  }
`
const ContentContainer = styled.div`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  width: 100%;

  @media (min-width: 992px) {
    padding: 15px 0;
  }
`

const Content = styled.p`
  line-height: 1.45;
  text-align: center;
  margin: 0 auto;
  max-width: 98%;

  @media (min-width: 992px) {
    max-width: 90%;
  }
`

const Home = (props) => (
  <Container>
    <Meta
      pageTitle='ChannelSuurf'
    >
      <title>ChannelSuurf</title>
    </Meta>
    <LeftSection color={props.color}>
      <Header>ChannelSuurf</Header>
      <Circle bg='gold' />
      <Circle bg='powderblue' />
      <Circle bg='palegreen' />
      <Circle bg='violet' />
      <Circle bg='crimson' />
      <Circle bg='royalblue' />
      <SubHeader><Highlight>A community for sharing and discovering the underappreciated videos on the Internet.</Highlight></SubHeader>
    </LeftSection>
    <RightSection>
      <ContentContainer>
        <Content>
          YouTube recommendations failing you?<br/>Subscriptions getting stale?<br/>Discover your next favorite creator from our hand-picked recommendations sent to your inbox every other Saturday. Currently on hiatus. 🙈
        </Content>
      </ContentContainer>
      <Mailchimp />
    </RightSection>
    <Footer>
      <LinkContainer>
        <Link to='/archive'>Archive</Link>
        <Link to='/submissions'>Submissions</Link>
        <Link to='/feedback'>Feedback</Link>
        <a href='//twitter.com/channelsuurf'>Twitter</a>
      </LinkContainer>
    </Footer>
  </Container>
)

const mapStateToProps = ({ home }) => ({
  color: home.bgColor
})

export default connect(mapStateToProps)(Home)
