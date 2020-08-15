const express = require("express");
const mongoose = require("mongoose");
const URI = require("./Db/url");
const user = require("./Db/schema");

const app = express();
let port = process.env.PORT || 3000;



mongoose.connect( URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use("/",require('./api/operation'));


app.get("/", (req,res) => {
    user.find({},(err,docs) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(docs);
        }
    })
})


app.listen(port, () => {
    console.log(`listening at https://localhost:${port}`);
})
