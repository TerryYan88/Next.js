import dbConnect from "../../../util/dbconnect";
import Pet from "../../../models/pets";
import {NextApiRequest,NextApiResponse} from "next";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    res.statusCode = 200;
    await dbConnect();
    if(req.method === "POST"){
        const pet = new Pet(JSON.parse(req.body))
        await pet.save();
        res.json({code:1,msg:"新增成功"})
    }else{
        const data = await Pet.find()
        res.json(data);
    }
}