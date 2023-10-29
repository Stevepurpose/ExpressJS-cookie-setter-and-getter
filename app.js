const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/setcookie',(req,res)=>{
    let maxAge = 24 * 60 *60* 1000 //milliseconds
    res.cookie('','',maxAge) //enter name of cookie between first '' and value of cookie within sceond ''
    res.send('cookie has been set')
})
app.get('/getcookie',(req,res)=>{
    const myCookie = req.cookies.user
    res.json(`value of 'user' cookie:${myCookie}`)
})

let port = 4500
app.listen(4500,()=>{
    console.log(`server is running on port ${port}`)
})