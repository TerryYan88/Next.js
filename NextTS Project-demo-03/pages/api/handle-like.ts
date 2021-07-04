import { sanityClient } from "../../lib/sanity";
import type { NextApiRequest, NextApiResponse } from 'next'
sanityClient.config({
    token:process.env.SANITY_WRITE_TOKEN,

});

export const likeButtonHandler = async (req:NextApiRequest,res:NextApiResponse)=>{
    const {_id} = JSON.parse(req.body)
    const data:any = await sanityClient
    .patch(_id)
    .setIfMissing({likes:0})
    .inc({likes:1})
    .commit()
    .catch((error)=>console.log(error))

    res.status(200).json({likes:data.likes})
}