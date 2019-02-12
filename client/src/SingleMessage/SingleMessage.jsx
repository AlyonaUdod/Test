import React from 'react'
import { Header, Message } from 'semantic-ui-react'

const SingleMessage = ({email, text, id}) => (
  <div>
    <Message>
      <Header as='h4'>{email}</Header>
      <p style={{fontSize: '17px'}}>
       {text}
      </p>
      <span style={{color: 'grey'}}>message id:  {id}</span>
    </Message>
  </div>
)

export default SingleMessage
