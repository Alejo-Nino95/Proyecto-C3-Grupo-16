'use strict'
const express = require('express')
const app = express()
app.get('/',(req,res) => {
    res.json({message:"hola mundo"})
})

app.listen(9999,() => {
    console.log("Servidor activo")
})