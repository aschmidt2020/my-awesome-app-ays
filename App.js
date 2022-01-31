const express = require('express')
const app = express()
// Changes made to the output
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello world!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})

// This is a change to branch feat1 to demonstrate release functionality using GitHub
// We will need to add some notes to our PR in order to demo the automated notes function as well.
// Simple Node 'Hello World' app for testing Github CI/CD features