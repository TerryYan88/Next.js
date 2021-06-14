
import { GetServerSideProps } from "next";

interface DetailProps{
    id:number
}

const Detail = (props:DetailProps)=>{

    return (
        <div>
            <h1>这个是详情页面</h1>
            <h1>dynamic route id = {props.id}</h1>
        </div>
    )
}
//获取动态路由传值
export const getServerSideProps:GetServerSideProps= async(ctx)=>{
    const {params} = ctx;
    return {
        props:{
            id:params!.id
        }
    }
}

export default Detail;