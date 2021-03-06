const express = require("express");
const path = require("path");
const fs = require("fs");
const { name } = require("pug/lib");
const app = express();
const port = -1;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('views'))// For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory
 
//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "this is the best content for ceo"
    const params = {'title':'pubg is the best game ',"content":con,'head':'Heyyy guys pls fill this form'}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
console.log(req.body);
    const params = {'message':'Your form has been submitted successfully'}
    
// name=req.body.name
// age=req.body.age
// gender=req.body.gender
// address=req.body.address
// more=req.body.more
// fs.FileSync('output.txt',outputToWrite)
// let outputToWrite =`the name of client is ${name},${age}years old , ${gender},residing at ${address},More about him/her :${more}`


    res.status(200).render('index.pug',params);
})


//START THE FUNCTION
port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
