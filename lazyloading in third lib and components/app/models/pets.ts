import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        default:""
    },
    price:{
        type:Number,
        default:1
    }
},{
    timestamps:true,
})

export default mongoose.models.Pet || mongoose.model('Pet', modelSchema)