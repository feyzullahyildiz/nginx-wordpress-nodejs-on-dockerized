const express = require('express')
const app = express()


app.all('/', (req, res) =>{
    console.log('requested')
    res.send('hello world')
})

app.all('/node', (req, res) =>{
    console.log('NODE requested')
    res.send('NODE hello world')
})
app.all('/aa', (req, res) =>{
    console.log('aa requested')
    res.send('aa hello world')
})


app.listen(8011, () => {
    console.log('server started')
})