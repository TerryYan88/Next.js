import mongoose from "mongoose";


const dbConnection = ()=>{
    if(mongoose.connection.readyState >= 1){
        console.log("Connection")
        return;
    }
    return mongoose.connect("mongodb+srv://TerryYan88:88Y04A30n@adminsystem.ijx4m.mongodb.net/<dbname>?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true
        })
}

export default dbConnection;