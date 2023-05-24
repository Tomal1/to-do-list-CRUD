
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 3001; 


app.use(express.urlencoded({ extended: true }));

// express by default dose not use json, this allow it
app.use(express.json());

const db = require("./config/connection");

app.use(express.static('public'));

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})