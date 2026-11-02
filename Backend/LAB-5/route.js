const express = require("express");
const app = express();
app.use(express.json());
let student = {
    id : 1,
    name : "Rohan",
    rollno : 20,
    email : "abc@gmail.com",
    course : "BCA",
};

// GET(Display)
app.get("/student", (req,res)=>{
    res.send(student);
});

// POST(Insert)

app.post("/student",(req,res)=>{
    student = {...student,...req.body};
    req.send("student added succesfully");
});

//put(update)

app.put("/student",(req,res)=>{
    student={...student,...req.body};
    req.send("student updated succesfully");
});

//delete

app.delete("/student",(req,res)=>{
    student={};
    req.send("student deleted succesfully");
});

app.listen(4000,()=>{
    console.log("server running on https://localhost:4000");
});
