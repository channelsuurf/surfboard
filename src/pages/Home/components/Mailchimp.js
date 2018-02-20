import React, { Component } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

// See: http://cdn-images.mailchimp.com/embedcode/slim-10_7.css

const EmailInput = styled.input`
  border: 1px solid black;
  display: block;
  margin: 15px auto 10px;
  min-height: 32px;
  min-width: 130px;
  padding: 0 0.4em;
  text-align: center;
  width: 95%;

  &:focus {
    border-color: #333;
  }

  @media (max-width: 992px) {
    display: inline-block;
    margin: 15px 2.5% 0;
    width: 45%;
  }
`

const SubmitButton = styled.button`
  background-color: black;
  border: 0 none;
  color: white;
  cursor: pointer;
  display: block;
  height: 32px;
  line-height: 32px;
  letter-spacing: 0.03em;
  margin: 0 auto;
  min-width: 90px;
  padding: 0;
  text-align: center;
  width: 95%;

  &:hover {
    background-color: ${lighten(0.3, 'black')};
  }

  @media (max-width: 992px) {
    display: inline-block;
    margin: 15px 2.5% 0;
    width: 45%;
  }
`

class Mailchimp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form
        action='//channelsuurf.us15.list-manage.com/subscribe/post?u=ef52a4cac5288bbd9cab00617&amp;id=5efb8ba689'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
      >
        <EmailInput
          type='email'
          name='EMAIL'
          id='mce-EMAIL'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Enter email address'
          required
        />
        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden='true'
        >
          <input
            type='text'
            name='b_ef52a4cac5288bbd9cab00617_5efb8ba689'
            tabIndex='-1'
            value=''
          />
        </div>
        <SubmitButton
          type='submit'
          name='subscribe'
          id='mc-embedded-subscribe'
        >
          Subscribe
        </SubmitButton>
      </form>
    )
  }
}

export default Mailchimp
