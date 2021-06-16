import {Router,withRouter} from "next/router";
import { GetStaticProps } from "next";
import {memo,useEffect,useState} from "react";
import axios from "axios";
interface LadiesProps{
    router:Router,
    data:any;
}

const Ladies = (props:LadiesProps)=>{
    const onGoBack = ()=>props.router.back();
    const [data,setData] = useState([]);
    useEffect(()=>{
        props.data&&setData(props.data);
    },[])
    return (
        <div>
            <div>ladies page</div>
            <h1>{props.router.query.name}</h1>
            <button onClick={onGoBack}>go back </button>
            <ul>
                {
                    data&&data.map((item:any)=>{
                        return <li key={item.id}>
                            {item.name}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export const getStaticProps:GetStaticProps = async()=>{
    const data = await axios("https://jsonplaceholder.typicode.com/users")
    return {
        props:{
            data:data.data
        }
    }
}

export default withRouter(memo(Ladies));