const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
// app.use(logger);
// console.log("Message is " + typeof(bodyParser.urlencoded({encoded:true})));
app.listen(3000,function(){
    console.log("Server started on Port 3000");
    // console.log(logger);
    // console.log(bodyParser.urlencoded());
});

app.get("/",function(req,res){
    //console.log(req.body);
    console.log("Inside the app.get method");
    res.sendFile(__dirname+"/index.html");   
});

app.post("/",function(req,res){
    console.log("inside the app.post method");
    // console.log(req.body.num1);
    // console.log(req.body.num2);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is "+result);
});


// function logger(req,res,next){
//     console.log("This is a middleware called after body-parser");
    
// }



// Adding the get and post methods for bmi calculator
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/(height*height);
    res.send("Your BMI is "+result);
});