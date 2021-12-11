const express = require('express');
const path = require("path");
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 8000;

//static public paths
const static = path.join(__dirname,'../public');
const views_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');

app.set("view engine", "hbs")
app.set("views",views_path)
hbs.registerPartials(partials_path)
app.use(express.static(static));






app.get("",(req,res)=>{
    res.render("index");
})


app.get("/about",(req,res)=>{
    res.render("about")
})




app.get("/weather",(req,res)=>{
    res.render("weather")
})



app.get("*",(req,res)=>{
    res.send(`<h1>404 ERROR  ${req.url}</h1>` )
    
})


app.listen(port,()=>{
    console.log(`this app is running on port ${port} sucessfully  `)
})