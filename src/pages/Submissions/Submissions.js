import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Background from '../../shared/components/Background'
import Meta from '../../shared/components/Meta'
import Footer from '../../shared/components/Footer'
import Header from '../../shared/components/Header'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const Airtable = styled.iframe`
  background: transparent;
  margin-bottom: 25px;
  max-width: 520px;
  width: 100%;
`

const Submissions = () => (
  <Background color='royalblue'>
    <Meta
      pageTitle='Submissions'
    >
      <title>Submissions | ChannelSuurf</title>
    </Meta>
    <Container>
      <Header>Submissions</Header>
      <Airtable
        className='airtable-embed airtable-dynamic-height'
        src='https://airtable.com/embed/shr7fcqu93Vb0cxns?backgroundColor=red'
        frameBorder='0'
        onmousewheel=''
      />
    </Container>
    <Footer>
      <Link to='/'>Home</Link>
      <Link to='/archive'>Archive</Link>
      <Link to='/feedback'>Feedback</Link>
      <a href='//twitter.com/channelsuurf'>Twitter</a>
    </Footer>
  </Background>
)

export default Submissions
