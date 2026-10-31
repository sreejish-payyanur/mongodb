import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    "email":String,
    "password":String
})


const user=mongoose.model("User",UserSchema)


export default user
