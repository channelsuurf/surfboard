import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import postscribe from 'postscribe'

import Background from '../../shared/components/Background'
import Meta from '../../shared/components/Meta'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'

const ArchiveContainer = styled.div`
  font-weight: bold;

  a {
    color: black;
  }

  .campaign {
    margin: 15px;
  }

  /* Intentionally push the footer down so that on page load,
     the footer isn't in the middle of the page while content
     loads and then pushed to the bottom */
  /* TODO: Aim to remove the Mailchimp auto-archive code,
     manually add issues, and better design the page */
  #mailchimp-archive {
    min-height: 100vh;
  }

  @media screen and (max-width: 576px) {
    .campaign a {
      display: block;
      margin-top: 5px;
    }
  }
`

class MailchimpArchive extends Component {
  componentDidMount () {
    // Mailchimp's Script uses 'document.write()' which doesn't map well
    // to the concept of React's virtual DOM, so we have to asynchronously
    // load the script and write to the actual referenced DOM node.
    postscribe(
      this.archive,
      '<script language="javascript" src="//channelsuurf.us15.list-manage.com/generate-js/?u=ef52a4cac5288bbd9cab00617&fid=2797&show=50" type="text/javascript"></script>',
      {done: () => {}}
    )
  }

  render () {
    return (
      <ArchiveContainer>
        <div id='mailchimp-archive' ref={(node) => this.archive = node} />
      </ArchiveContainer>
    )
  }
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const Archive = () => (
  <Background color='gold'>
    <Meta
      pageTitle='Archive'
    >
      <title>Archive | ChannelSuurf</title>
    </Meta>
    <Container>
      <Header>Archive</Header>
      <MailchimpArchive />
    </Container>
    <Footer>
      <Link to='/'>Home</Link>
      <Link to='/submissions'>Submissions</Link>
      <Link to='/feedback'>Feedback</Link>
      <a href='//twitter.com/channelsuurf'>Twitter</a>
    </Footer>
  </Background>
)

export default Archive
