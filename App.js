const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const PORT = 3000;

app.use(cors());
app.use(bodyParser,urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})