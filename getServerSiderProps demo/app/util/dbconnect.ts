import Mongoose from "mongoose";

async function dbConnect(){
    if(Mongoose.connection.readyState >=1){
        console.log("loaData();");
        return
    }
    return Mongoose.connect("mongodb+srv://TerryYan88:88Y04A30n@adminsystem.ijx4m.mongodb.net/<dbname>?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    })
}

export default dbConnect;