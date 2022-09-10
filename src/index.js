
const express = require('express');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// const morgan = require('morgan');
// const helmet = require('helmet');

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// app.use(helmet());

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('tiny'));
// }

//MongoDB configurations
const connect = mongoose.connect("mongodb+srv://donorbuddy:donorbuddy@cluster0.ftqkwbu.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// mongoose.set('useFindAndModify', false);

// Routes
const donationsRoute = require('./routes/donations');
const usersRoute = require('./routes/users');

// Adding Routes path
app.use('/api/donations', donationsRoute);
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  try {

    res
      .send('Welcome to donations API!');
  } catch (err) {
    return res.send({ err: err.message })
  }

});

// app.use("*", (req, res) => {
//   res
//     .status(404)
//     .send('Not found');
// });

app.listen(port, async () => {
  await connect
  console.log('Starting server on port ' + port)
});