const express=require('express');
const app=express();
function middle1(req,res,next){
    console.log("This is a custom middleware");
    res.send("This is inside the about page");
    next();
}
app.get("/",function(req,res,next){
    console.log("inside the app.get method middleware");
    res.send("<h1>Hello World</h1>");
    next();
});
app.use("/about",middle1);



app.listen(3000);