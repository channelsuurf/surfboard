import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const ga = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-98425825-1');
`

const Meta = (props) => (
  <Helmet
    defaultTitle='ChannelSuurf'
  >
    <meta name='description' content={props.description} />
    {/* Twitter Card Data */}
    {/* See: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image */}
    {/* See: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup */}
    {/* See: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
    {props.twitter && props.twitter.image
      ? <meta name='twitter:card' content='summary_large_image' />
      : <meta name='twitter:card' content='summary' />}
    {/* The Twitter @username the card should be attributed to. */}
    <meta name='twitter:site' content='@channelsuurf' />
    {/* A concise title for the related content. */}
    <meta name='twitter:title' content={props.pageTitle} />
    {/* A description that concisely summarizes the content as appropriate for presentation within a Tweet.
    You should not re-use the title as the description or use this field to describe the general services provided by the website. */}
    <meta name='twitter:description' content={props.description} />
    {/* A URL to a unique image representing the content of the page.
    You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. */}
    {props.twitter && props.twitter.image ? <meta name='twitter:image' content={props.twitter.image} /> : null}
    {/* A text description of the image conveying the essential nature of an image to users who are visually impaired. */}
    {props.twitter && props.twitter.alt ? <meta name='twitter:image:alt' content={props.twitter.alt} /> : null}
    {/* Facebook Open Graph Data */}
    {/* See: https://developers.facebook.com/docs/sharing/webmasters/ */}
    <meta property='og:type' content='website' />
    {/* The title of your article without any branding such as your site name. */}
    <meta property='og:title' content={props.pageTitle} />
    {/* The URL of the image that appears when someone shares the content to Facebook. */}
    {props.facebook && props.facebook.image ? <meta property='og:image' content={props.facebook.image} /> : null}
    {/* A brief description of the content, usually between 2 and 4 sentences. This will displayed below the title of the post on Facebook. */}
    <meta property='og:description' content={props.description} />
    {/* Only show Google Analytics in Production */}
    <script>{process.NODE_ENV === 'production' ? ga : ''}</script>
    { props.children }
  </Helmet>
)

Meta.propTypes = {
  children: PropTypes.any,
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitter: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string
  }),
  facebook: PropTypes.shape({
    image: PropTypes.string
  })
}

Meta.defaultProps = {
  description: 'ChannelSuurf, a community for sharing and discovering the underappreciated videos on the Internet. What are you watching?'
}

export default Meta
