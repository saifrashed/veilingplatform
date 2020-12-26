const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');
const path     = require('path');

require('dotenv').config();

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
});


// declare routers
const usersRouter = require('./routes/users');


// include routers in application
app.use('/users', usersRouter);


if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets i.e. main.js
    app.use(express.static(__dirname + '/client/build'));
    // If Express doesn't recognize route serve index.html
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        );
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
