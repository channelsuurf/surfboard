import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import Background from '../../shared/components/Background'
import Meta from '../../shared/components/Meta'
import Footer from '../../shared/components/Footer'
import Header from '../../shared/components/Header'

const videoIds = [
  't3otBjVZzT0', // Something Went Terribly Wrong
  'FvTN9siaT-M', // Computer Show "Communities"
  'dNkXhruly9Q', // Bohdi - Amazing, Pt. 1 (ft. Cactus?)
  'npqD602G90o', // VULFPECK /// Barbara
  'qybUFnY7Y8w', // OK Go - This Too Shall Pass - Rube Goldberg Machine - Official Video
  'vqGPq1zrD5E' // Poppy - Interweb (Official Video)
]

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const NotFound = () => (
  <Background color='crimson'>
    <Meta
      pageTitle='Not Found'
    >
      <title>Not Found | ChannelSuurf</title>
      <meta name='robots' content='noindex' />
    </Meta>
    <Container>
      <Header>Not Found</Header>
      <YouTube
        videoId={videoIds[Math.floor(Math.random() * videoIds.length)]}
        opts={{
          height: '394',
          width: '700',
          playerVars: {
            autoplay: 1
          }
        }}
      />
    </Container>
    <Footer>
      <Link to='/'>Home</Link>
      <Link to='/archive'>Archive</Link>
      <Link to='/submissions'>Submissions</Link>
      <a href='//twitter.com/channelsuurf'>Twitter</a>
    </Footer>
  </Background>
)

export default NotFound
