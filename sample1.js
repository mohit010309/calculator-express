const express=require('express');
const app=express();

app.listen(3000);
app.use(logger);
app.get("/",function(req,res,next){
    res.send("Hello Mohit");
    console.log("inside the app.get middleware");
    next();
});

app.use(logger2);
function logger(req,res,next){
    console.log("This is a middleware");
    
}
function logger2(req,res,next)
{
    console.log("Another next middleware");
}