const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./apis/routes')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/api', routes)


app.use('/assets', express.static(__dirname + '/client/app/assets') )
app.use('/config', express.static(__dirname + '/client/app/config') )
app.use('/components', express.static(__dirname + '/client/app/components') )


app.use("/*", (req, res, next) => {
    res.sendFile(__dirname + "/client/app/index.html" );
});


app.listen('3000', () =>{
    console.log('Server running on port 3000')
})