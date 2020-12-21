const express = require('express');
const cors    = require('cors');
const path    = require('path');

require('dotenv').config();

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mailer
const mailerRouter = require('./routes/mailer');

app.use('/mailer', mailerRouter);

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
