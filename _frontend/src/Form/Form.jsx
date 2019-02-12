import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'

const Forms = ({email, text, handlerChange, postMessage, handleKeyDown}) => (
  <Form onSubmit={postMessage}>
   <Form.Field >
      <input placeholder='Email'  type='text' value={email} onChange={handlerChange} name='email'/>
    </Form.Field>
    <Form.Field>
      <TextArea placeholder='Text' type='text' value={text} onChange={handlerChange} name='text' onKeyDown={handleKeyDown}/>
    </Form.Field>
    <Button positive type='submit'>Submit</Button>
  </Form>
)

export default Forms
