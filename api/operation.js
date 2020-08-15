const express = require("express");
const users = require("../Db/schema");
const helper = require("./helper");
const bodyParser = require('body-parser');


const app = express();
const jsonParser = bodyParser.json();


app.post("/",jsonParser ,(req,res) => {

    let data = req.body;
    if(!data || !data.name || !data.email){
        res.send('Name and Email cannot be empty');
    }

    // data = helper.insertFormat(data);

    users.create(data, (err,docs) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send('Inserted');
        }
    })
})


app.delete("/", jsonParser, (req,res) => {

    let data = req.body;
    if(!data || !data.name || !data.email){
        res.send('Name and Email cannot be empty');
    }

    // data = helper.insertFormat(data);

    users.deleteOne(data, (err,docs) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send('deleted');
        }
    })
})


app.patch("/", jsonParser, (req,res) => {

    let data = req.body;
    if(!data || !data.name || !data.email){
        res.send('Name and Email cannot be empty');
    }

    // data = helper.insertFormat(data);

    users.update({$or:[{name:data.name},{email:data.email}]}, {name:data.name, email:data.email}, (err,docs) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send('updated');
        }
    })
})

module.exports = app;