const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser,urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})