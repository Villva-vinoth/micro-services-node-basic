const express = require('express')
const proxy = require('express-http-proxy')
require('dotenv').config()
const app =express()

const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('hello from gateway')
})

console.log(process.env.MS1_URL)
console.log(process.env.MS2_URL)

app.use('/ms1',proxy(process.env.MS1_URL))
app.use('/ms2',proxy(process.env.MS2_URL))

app.listen(port,()=>{
    console.log(`Gateway is listening on port ${port}!`)
})