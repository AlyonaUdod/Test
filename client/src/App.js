import React, { Component } from 'react'
import { Header, Dimmer, Loader, Segment, Pagination, Item, Form, Button } from 'semantic-ui-react'
import SingleMessage from './SingleMessage/SingleMessage'
import Forms from './Form/Form'
import './App.css'
import axios from 'axios'


class App extends Component {

  state = { 
    messages: null,
    messagesLength: 0,
    error: '',
    page: 1,
    email: '',
    text: '',
    messageId: '',
    singleMessage: null,
    seachError: '',
  }

  // componentDidMount() {
  //   this.getAllMessages()
  //   this.getMessagesByPage(this.state.page)
  // }

  handlerChange = (e) => {
    this.setState({
       [e.target.name] : e.target.value
    })
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
        this.postMessage(e);
    }
  }

  getAllMessages = () => {
    axios.get(`https://test-alyona-udod.herokuapp.com/api/messages`)
      .then(data => this.setState({messagesLength: Math.ceil(data.data.length/10)}))
      .catch(err => this.setState({error: err}))
  }

  getMessagesByPage = () => {
    axios.get(`https://test-alyona-udod.herokuapp.com/api/messages/list/${this.state.page}`)
      .then(data => this.setState({messages: data.data}))
      .catch(err => this.setState({error: err}))
  }

  postMessage = (e) => {
    e.preventDefault()
    let message = {
      email: this.state.email,
      text: this.state.text,
    }
   this.sendMessageToDb(message)
  }

  sendMessageToDb = (message) => {
    axios.post('http://localhost:3002/api/messages/', message)
      .then(data => this.checkMessagesLength(data.data))
      .catch(() => this.setState({error: 'Validation faild! Your email isn\'t correct or message length more then 100 symbols, try again.'}))
  } 

  checkMessagesLength = async(message) => {
    if (this.state.messages.length < 10) {
      this.setState(prev =>({
        messages: [...prev.messages, message],
        email: '',
        text: '',
        error: '',
      }))
    } else{
      await this.setState(prev =>({
        email: '',
        text: '',
        error: '',
        page: prev.page === prev.messagesLength ? prev.page+1 : prev.page === 1 ? Math.floor(prev.messagesLength+1) : prev.messagesLength,
        messagesLength: prev.messages.length === 10 ? Math.floor(prev.messagesLength+1) : prev.messagesLength,
      }))
      this.getMessagesByPage()
    }
  }

  showNewPage = async(e) => {
    e.persist()
    if (e.target.type === 'pageItem'){
     await this.setState({
       page: +e.target.text
     })
   } else if (e.target.type === 'nextItem') {
     if(this.state.page < this.state.messagesLength) {
       await this.setState(prev => ({
        page: prev.page+1
      }))
     }
   } else if (e.target.type === 'prevItem') {
     if(this.state.page > 1) {
      await this.setState(prev => ({
        page: prev.page-1
      }))
     }
   }
   this.getMessagesByPage()
  }

  getMessageById=()=> {
    if(this.state.messageId){
      axios.get(`http://localhost:3002/api/messages/single/${this.state.messageId}`)
      .then(data => this.setState({singleMessage: [data.data], seachError: ''}))
      .catch(() => this.setState({seachError: 'Sorry, can\'t find message with this ID, try again.'}))
    }
  }

  removeSingleMessage=()=>{
    this.setState({
      singleMessage: null,
      messageId: '',
      seachError: '',
    })
  }

  render() {
    const { page, messages, error, email, text, messagesLength, messageId, singleMessage, seachError } = this.state
    return (
      <div className='wrapper'>
        <div className='main-title'> 
          <Header as='h2' content='Test DB2 Limited'/>
        </div>
        <div className='pagin-wrap'>
          <Pagination
          activePage={page}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          onClick={this.showNewPage}
          totalPages={messagesLength}
          />
        </div>
        <div className='seach-wrapper'>
          <Form style={{display:'flex', alignItems: 'center', justyfyContent: 'space-evenly'}}>
            <Form.Field style={{marginTop:'1rem'}}>
              <input value={messageId} placeholder='Get Message By ID' name='messageId' onChange={this.handlerChange}/>
            </Form.Field>
            <Button positive type='submit' onClick={this.getMessageById}>Seach</Button>
            <Button negative onClick={this.removeSingleMessage}>Reset</Button>
          </Form>
          <Item style={{color:'red', textAlign: 'center'}}>{seachError}</Item> 
        </div>
        <div className='message-wrapper'>
          { messages === null ? 
              <Segment style={{padding: '13.8rem 0'}}>
                    <Dimmer active inverted>
                        <Loader inverted> Loading ...</Loader>
                    </Dimmer>
                </Segment>:
            !singleMessage && messages.length !== 0 ? messages.map(el => <SingleMessage key={el._id} id={el._id} email={el.email} text={el.text}/>) : singleMessage ? singleMessage.map(el => <SingleMessage key={el._id} id={el._id} email={el.email} text={el.text}/>) : <div style={{color:'red', textAlign: 'center'}}> No messages yet</div>
          }
          <Item className='error'>{error}</Item> 
        </div>
        <div className='form-wrapper'> 
          <Forms email={email} text={text} handlerChange={this.handlerChange} handleKeyDown={this.handleKeyDown} postMessage={this.postMessage}/>
        </div>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
      </div>    
    )
  }
}

export default App;
