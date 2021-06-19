import dbConnect from "../../../util/dbConnect";
import Pet from "../../../models/pets"
import {NextApiRequest,NextApiResponse} from "next";
// eslint-disable-next-line import/no-anonymous-default-export
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    res.statusCode = 200;
    await dbConnect();
    if(req.method === "GET"){
        try{
            const pet = await Pet.findById(req.query.id)
            res.json(pet);
        }catch(e){
            res.json({code:-1,e});
        }
    }else if(req.method==="PUT"){
        try{
            const pet = await Pet.findByIdAndUpdate(req.query.id,JSON.parse(req.body))
            res.json({
                code:1,
                msg:"修改成功"
            });
        }catch(e){
            res.json({code:-1,e});
        }
    }else if(req.method==="DELETE"){
        try{
            const pet = await Pet.findByIdAndDelete(req.query.id)
            res.json({
                code:1,msg:"删除成功"
            });
        }catch(e){
            res.json({code:-1,e});
        }
    }else{
        res.json({code:-1})
    }
}