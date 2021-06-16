import Head from "next/head";
import Router from "next/router";
const List = ()=>{
    return (
        <div>
            <Head>
                <title> this is a list</title>
            </Head>
                this is the list page;
            <button onClick={()=>Router.push('/')}>go home</button>
        </div>
    )
}

export default List;