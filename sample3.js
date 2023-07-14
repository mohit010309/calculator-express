// This code will demonstrate that we can actually pass something
// from one middleware to another middleware

const express=require('express');
const app=express();

// Creating the first middleware
function middle1(req,res,next){
    req.someData="This is some data";
    next();
}
app.use(middle1);


// Creating the second middleware
function middle2(req,res,next){
    console.log("This is inside the second middleware");
    // console.log(req.mohitData);
    console.log("Message from previous middleware : "+req.someData);
    next();
}
app.use(middle2);

app.get("/",function(req,res,next){
    console.log("inside the app.get method");
    res.send("Hello world");
    next();
});

//Creating third middleware
function middle3(req,res,next){
    console.log("This is inside the third and final middleware");
    next();
}
app.use(middle3);
app.listen(3000);