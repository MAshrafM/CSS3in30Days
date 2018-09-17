const express = require('express')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const app = express()

// middleware
app.set('port', (process.env.PORT || 3000))
app.engine('handlebars', exphbs({defaultLayout: 'main',
layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
  }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views/'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/public", express.static(__dirname + '/public'))
// routes
/* ToDo Main Route for all Lessons later */
// To Do

// Lessons
const lessons = {
                    '01' : 'Fancy Button',
                    '02' : 'Sexy Typography',
                    '03' : 'Clipping Images',
                    '04' : 'Sexy Registration Form',
                    '05' : 'Useful Broken Images',
                    '06' : 'Print Specific Styles',
                    '07' : 'Image Manipulation',
                    '08' : '8-bit Mario',

                  }

Object.keys(lessons).forEach(function (l) {
  app.get(`/l${l}`, function(request, response) {
    response.render(`lessons/l${l}/index`, {title: `${l} | ${lessons[l]}`, day: `l${l}`})
  })
})

// Listen
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})