const express =  require('express');
const app = express();
const mongoose=require("mongoose");
app.use(express.json())
const cors= require("cors");
const userdata = require('./useData');
app.use(cors());


const mongoUrl = "mongodb+srv://shabnoor:shabnoor@clustersell.mqeqzue.mongodb.net/test";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("Connected to database");
})
.catch((e)=> console.log(e));



app.listen(5000,()=> {
    console.log("Server Started")
});


require("./userDetails")
const User=mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{

    const{fname, lname, email, password }= req.body;

    try {

        await User.create({
            fname,
            lname,
            email,
            password, 
        });
        res.send({status :"ok"})
    } catch (error) {
        res.send({status:"error"})
    }
});

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
   
    let usersfound = userdata.filter(obj=>{
        if(obj.email === email) return true;
    })
    
    if(usersfound.length==0) res.json({success:false})
    else{
        usersfound.forEach(obj=>{
            if(obj.password === password) res.json({success:true})
        })
    }
    
    res.json({success:false})
})