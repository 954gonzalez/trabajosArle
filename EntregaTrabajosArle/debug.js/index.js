

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    req.token=10+ parseInt('10')
    res.send('servidor en uso')
})

app.listen(3000)
console.log('servidor corriendo en el puerto 3000');