const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config()
const path = require('path')
const messagesRoutes = require('./routes/messagesRoutes')

const PORT = process.env.PORT || 3003;
const app = express();

const favicon = require('express-favicon');
app.use(favicon(__dirname + 'client/public/favicon.ico'));

// app.use(express.static(path.join(__dirname)));
// app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + '/images'));
// app.use("/scripts", express.static(__dirname + '/scripts'));
// app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.send('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  // res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.connect(process.env.MONGODB_URL)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(cors());
// app.options('*', cors());

// app.use('/api/messages', messagesRoutes);

// app.use((req, res, next) => {
//   res
//     .status(404)
//     .json({err: '404'});
// });

// app.use((err, req, res, next) => {
//   res
//     .status(500)
//     .json({err: '500'});
// })

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));