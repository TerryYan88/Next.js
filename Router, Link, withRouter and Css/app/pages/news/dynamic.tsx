import {GetServerSideProps} from "next";
import {withRouter,Router} from "next/router";
import Link from "next/link";
interface NewProps{
    name:string
    router:Router
}

const News = (props:NewProps)=>{

    return (
        <div>
            <h1>new page</h1>
            <h1>{props.name}</h1>
            <h1>
                <Link href="/">
                    <a style={{"color":"red"}}>go home</a>
                </Link>
            </h1>
            <h1>withRouter</h1>
            {props.router.query.name}
        </div>
    )
}

export const getServerSideProps:GetServerSideProps= async(ctx)=>{
    const {query} = ctx;
    console.log(query)
    return {
        props:{
            name:query!.name
        }
    }
}

export default withRouter(News);