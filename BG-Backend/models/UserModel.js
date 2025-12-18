import mongooes from "mongoose";

const UserSchema = new mongooes.Schema({
    username: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true})

const user = mongooes.models.user || mongooes.model("user", UserSchema);

export default user