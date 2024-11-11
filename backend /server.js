const express = require("express")
const { createTodo, updateTodo } = require("./types")
const {todo} = require("./db")
const cors = require("cors")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://anikethan:C7OqrCQcZpzSC067@cluster0.lyptm.mongodb.net/todoReact?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err))

app.use(cors())
app.use(express.json())


app.post("/todo",async(req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"wrong format"
        })
        return
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"todo created",
        createPayload
    })

})

app.get("/todos",async(req,res)=>{
    const todoFind  = await todo.find()
    res.json({
        todos:todoFind
    })
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            message:"wrong format"
        })
        return
    }

    await todo.update({
        _id:req.body.id
    },
    {
        completed:true
    }
)
res.json({msg:"todo updated"})
})


app.listen(8080,()=>{
    console.log("server started....")
})