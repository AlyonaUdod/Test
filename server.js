const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config()
// const path = require('path')
// const messagesRoutes = require('./routes/messagesRoutes')

const PORT = process.env.PORT || 8000;
const app = express();

// const favicon = require('express-favicon');
// app.use(favicon(__dirname + 'client/public/favicon.ico'));

app.use(express.static('./client/build'));
// app.use('/api/messages', messagesRoutes);

// app.get('/', (req, res) => {
//   res.send('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//   // res.sendFile(path.join(__dirname + 'client/build/index.html'))
// })

// app.get('/something', (request, res) => {
//     res.send('somethingg!!')
//     }
// )

// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb://admin:qwertyui90@ds157064.mlab.com:57064/sandbox_test')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.options('*', cors());

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


// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 8000;

// app.get('/', (request, res) => {
//     res.send('Conneccteedd!!')
//     }
// )

// app.get('/something', (request, res) => {
//     res.send('somethingg!!')
//     }
// )

// app.listen(PORT, () => console.log('Example app listening on post 3000!'))