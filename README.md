How use this api?

You have few endpoints:

GET https://test-alyona-db2.herokuapp.com/api/messages

Show your all messages. No parameters.

Message structure : 

  

    {
      "_id": {
          "$oid": "5c631df5c414dba294b8089f"
      },

      "email": "example@gmail.com",

      "text": "Hello! It's a test message!",

      "created_at": {
          "$date": "2019-02-12T19:26:45.014Z"
      },

      "update_at": {
          "$date": "2019-02-12T19:26:45.014Z"
      },

      "__v": 0
    }
    
 

--------------------------------------


GET https://test-alyona-db2.herokuapp.com/api/messages/list/:num

Method for getting all messages with pagination by 10 messages per request.

e.g. 

https://test-alyona-db2.herokuapp.com/api/messages/list/1 will return first 10 messages.

https://test-alyona-db2.herokuapp.com/api/messages/list/2 will return second 10 messages.

etc

--------------------------------------

GET https://test-alyona-db2.herokuapp.com/api/messages/single/:id

Method for getting single message by unique identifier.

e.g.

https://test-alyona-db2.herokuapp.com/api/messages/single/59f7303c2f60e5d7e6167dd1


--------------------------------------

POST https://test-alyona-db2.herokuapp.com/api/messages

Creating new message. Required body parameters: email -> String, text -> String.

Request validators on server side:

- Email validation (checking if that is real email);

- Message validation (checking if message is not empty string, and length < 100).
