const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const messagesRoutes = require('./routes/messagesRoutes')

const PORT = process.env.PORT || 3002;
const app = express();

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URL)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.options('*', cors());

app.use('/api/messages', messagesRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .json({err: '404'});
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({err: '500'});
})

app.use(express.static('./frontend/build'));
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));