//npm i express
const express = require("express");

//npm i dotenv
require("dotenv").config();

const app = express();
const PORT = 3001; 


app.use(express.urlencoded({ extended: true }));

// express by default dose not use json, this allow it
app.use(express.json());

const db = require("./config/connection");


app.get("/",(req,res)=>{

    const sql = "SELECT * FROM input";

    db.query(sql, (err, data) =>{
        if(err){
            throw err;
        }else{
            return res.json(data);   
        }
    })
})

app.post("/",(req,res)=>{

    const sql = "INSERT INTO input (toDos) VALUE (?)";
    const values = [req.body.toDos];

    db.query(sql, values, (err, data) =>{
        if(err){
            throw err;
        }else{
            return res.json(data);   
        }
    })
})


app.delete("/", (req, res)=>{
    const values = [req.body.id]

    const sql =  `DELETE FROM input WHERE id = ?`; // Always use backticks when not hard coding
    
    db.query(sql,values,(err,data) => {
        if(err){
            throw err;
        } else{
            console.log(data)
            return res.json("deleted user successfully");
        }
    })
});

app.use(express.static('public'));

app.listen(process.env.PORT || PORT, () => {
    console.log(`listening to port ${PORT}`)
})