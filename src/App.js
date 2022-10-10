const express = require('express')
const path = require('path');
require('./db/mongoose')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')

const app = express();


app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app