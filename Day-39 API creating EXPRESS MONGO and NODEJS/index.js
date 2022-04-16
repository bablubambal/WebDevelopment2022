const express = require("express")
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const app = express()
const port  = 3000

//Middle Ware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// Connecting moooges with mongoDB
mongoose.connect("mongodb://localhost:27017/School", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connected with database"))

// Collections
const StudentSchema = new mongoose.Schema( {
    name: String,
    age: Number,
    marks: Number,
    class: String,

})
//Modal in MongoDB
const Student = new  mongoose.model("Student", StudentSchema)




app.get("/",(req,res)=>{
    res.send("Hello World your live on your server. hi i am an update further update")
})
// Create a Studnet:
app.post("/student", async (req,res)=>{
    const student = await Student.create(req.body)
    res.status(201).json({
        success: true,
        student
    })

})
//Get all Student from Database
app.get("/student", async (req,res)=>{
    const students = await Student.find()
    res.status(200).json({
        success:true,
        students

    })

})

//Update Student in Database:
app.put("/student/:id", async (req,res)=>{
    let student = await Student.find({_id:req.params.id})
    if(!student){
        return res.status(404).json({
            success:false,
            message: "Student not found"
        })
    }
    student = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true})
   return  res.status(200).json({
        success:true,
        message: "Student updated success",
        student
    })
})
//deledte one studnet
app.delete("/student/:id", async (req,res)=>{
    let student = await Student.find({_id:req.params.id})
    if(!student){
        return res.status(404).json({
            success:false,
            message: "Student not found"
        })
    }
    await Student.deleteOne({ _id: req.params.id });
   return  res.status(200).json({
        success:true,
        message: "Student deleted success",
        student
    })
})

//remove studnet from Database
// app.delete("/student/:id", async (req,res)=>{
//     let student = await Student.find({_id:req.params.id})
//     // console.log(req.params.id)
//     // console.log(student)
//     if(!student){
//         return res.status(404).json({
//             success:false,
//             message:"Student not found"
//         })
//     }
//     // await student.remove()
//     return  res.status(200).json({
//         success:true,
//         message:"Student Deleted"
//     })

// })


// delete everything from db..
app.delete("/student", async (req,res)=>{ 
    await Student.deleteMany()
    return  res.status(200).json({
        success:true,
        message:"All Student Deleted"
    })
} )
app.delete("/student/:id", async (req,res)=>{
    let student = await Student.find({_id:req.params.id})
    if(!student){
        return res.status(404).json({
            success:false,
            message:"Student not found"
        })
    }
    await student.remove()
    return  res.status(200).json({
        success:true,
        message:"Student Deleted"
    })

})


app.listen(port,()=>{console.log("Server running at: " + port)})