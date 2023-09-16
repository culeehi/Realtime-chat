const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
   res.send('Well come our chat App ....');
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
   console.log(`server running on port....: ${port} `);
});

mongoose
   .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log('MongoDb connection success'))
   .catch((error) => console.log('MongoDb connection failed', error.message));
