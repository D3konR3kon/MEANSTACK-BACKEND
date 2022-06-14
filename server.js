const express = require('express');
const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");

db.mongoose.connect(db.url, {usedNewParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("Connect to the database!");
})
.catch(err =>{
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.get('/', (req, res) =>{
    res.json({message: "Welcome to my new backend app"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})