import express from 'express'
import sum from './sum.js'

const app= express()
const PORT=8000

app.listen(PORT,()=> {
    console.log(`Server is running on port : ${PORT}`)
})

app.get('/home',(req,res) => {
    res.json({
        msg: `Welcome to ${PORT } Home`
    });
})


app.get('/getSum/:a/:b', async(req,res) => {
    const {a,b} = req.params
    res.json({
        msg: `sum of  ${a} and ${b} is  ${sum(parseInt(a),parseInt(b))}`
    });
})