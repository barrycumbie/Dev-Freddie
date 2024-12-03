const express = require('express')
const app = express()

// require('dotenv').config()
// const bodyParser = require('body-parser')
// const { ObjectId } = require('mongodb')
// const port = (process.env.PORT || 5500)
// const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = process.env.MONGO_URI; 
// const uri = "mongodb+srv://barry:cat@snowcatcluster.uhucqcw.mongodb.net/?retryWrites=true&w=majority&appName=snowcatCluster";

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/index.html'))
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Hello World from Expressasdfasds');
    // res.sendFisle('index.html');
})

app.get('/ejs', (req, res) => {
    res.render('index', {
        serverVariable: "this is a server variable"} 
    );
})

app.listen(3000)
