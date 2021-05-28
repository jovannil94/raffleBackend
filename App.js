const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const app = express();
const PORT = process.env.PORT;
const rafflesRouter = require('./routes/raffle');

app.use(cors());
app.use(bodyParser,urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/raffles", rafflesRouter);

app.use((error, req, res, next) => {
    console.log(error);
    if(error.status) {
        res.status(error.status).json(error);
    } else {
        res.status(500).json(error);
    }
})

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})