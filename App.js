const express = require('express')
const app = express()
// Changes made to the output
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send(
        '<h2>Hello to ***Audrey*** and the rest of the world out there!</h2>'
        )

}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}.)
})

// Simple Node 'Hello World' app for testing Github CI/CD features - added github workflows
// Added additional workflow with echo commands
// We will need to add some notes to our PR in order to demo the automated notes function as well.