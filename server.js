// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config()
// const path = require('path')
// const messagesRoutes = require('./routes/messagesRoutes')

// const PORT = process.env.PORT || 3003;
// const app = express();

// // app.use(express.static(path.join(__dirname)));
// // app.use("/styles", express.static(__dirname));
// // app.use("/images", express.static(__dirname + '/images'));
// // app.use("/scripts", express.static(__dirname + '/scripts'));
// // app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', (req, res) => {
//   res.send('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//   // res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

// // mongoose.Promise = global.Promise;
// // mongoose.set('useNewUrlParser', true);
// // mongoose.set('useFindAndModify', false);
// // mongoose.set('useCreateIndex', true);
// // mongoose.connect(process.env.MONGODB_URL)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// // app.use(cors());
// // app.options('*', cors());

// // app.use('/api/messages', messagesRoutes);

// // app.use((req, res, next) => {
// //   res
// //     .status(404)
// //     .json({err: '404'});
// // });

// // app.use((err, req, res, next) => {
// //   res
// //     .status(500)
// //     .json({err: '500'});
// // })

// app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));


const express = require('express')
const app = express()
const PORT = 3002
// const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 // если false - метод не заходит внутрь вложеных объектов. true - метод заходит внутрь всех вложенных объектов и вытягивает оттуда ключи 

// app.get('/', (req, res) => res.send(`<h1>Hello world, it\'s <i>START</i> page!</h1>`));

// app.get('/contact', (req, res) => res.send(`<button>Hello world, it\'s <br/> CONTACT page!</button>`))

// app.get('/link', (req, res) => res.send(`<h3>Hello world, it\'s LINK page!</h3>`))

// app.get('/user/:id&:name&:animal', (req, res) => res.send(
//     `<h3>Привет пользователь: ${req.params.id}, <br/> пол: ${req.params.name}, <br/> животное: ${req.params.animal}!</h3>`
//     // console.log(req.params)
//     ))

// app.listen(3000, () => console.log('Example app listen on port 3000!'));


const db = [
    {
        id: 1,
        name: 'Bah'
    },
    {
        id: 2,
        name: 'Mozart'
    },
    {
        id: 3,
        name: 'Wagner'
    },
    {
        id: 4,
        name: 'Borodin'
    }
]


app.get('/', (req,res) => res.send('hello! this is my page ^_^'));
app.get('/music/:id', (req,res) => 
    res.send(
    // console.log(req.params.id)
    db.find(el => el.id === +req.params.id) ? db.find(el => el.id === +req.params.id) : 'Sorry, no composer by this id. >_<'
    ))



app.get('/home', function(req, res){
    res.sendFile(__dirname+'/home.html')
    // fs.readFile('home.html', 'utf8', function(err, data) {
    //     if(err) {
    //         res.sendStatus(404)
    //         res.send('Error load index.html');
    //     } else {
    //         res.send(data)
    //     }
    // })
})

app.get('/link', function(req, res){
    res.sendFile(__dirname+'/link.html')
    // fs.readFile('link.html', 'utf8', function(err, data) {
    //     if(err) {
    //         res.sendStatus(404)
    //         res.send('Error load index.html');
    //     } else {
    //         res.send(data)
    //     }
    // })
})

app.get('/read', function(req, res){
    res.sendFile(__dirname+'/read.html')
    // fs.readFile('read.html', 'utf8', function(err, data) {
    //     if(err) {
    //         res.sendStatus(404)
    //         res.send('Error load index.html');
    //     } else {
    //         res.send(data)
    //     }
    // })
})

app.post('/music/', (req, res) => {
    console.log(req.body)
    let a = {
        id: +req.body.id,
        name: req.body.name,
    }
    db.push(a)
    res.send(db)
})

app.delete('/music/:id', (req, res) => {
    console.log(req.params)
    let a = db.filter(el => el.id !== +req.params.id)
  
    // res.sendStatus()
    db = [...a]
    res.send(a)
})

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));