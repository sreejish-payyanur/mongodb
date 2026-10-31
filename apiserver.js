import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import user from './user.js'
 
const app=express()
const port=8090
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://sreejishpayyanur_db_user:1TRelsj71TKmYbdo@cluster0.geaeifs.mongodb.net/gtec")

const data=[]

app.post("/",async(req,res)=>{
    let savedata=req.body
    
    await user.create(
        savedata
    )
    res.json({"msg":"uploaded"})
})



app.get("/",async(req,res)=>{

    const all_data=await user.find()

    res.json(all_data)
})

app.put("/:id",async(req,res)=>{

    const {id}=req.params

    const {email}=req.body

    const user_data=await user.findById(id)

    if(user_data){
        user_data.email=email
        await user_data.save()
    }else{
        res.json({"error":"user not found"})
    }
    res.json({"message":`updated `})
    
})

app.listen(port,()=>console.log(`http://localhost:${port}/`))