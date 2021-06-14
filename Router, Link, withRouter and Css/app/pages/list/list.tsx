import Head from 'next/head'
import Link from 'next/link'
import {ListWrap} from "../StyledList"
import {GetStaticProps} from "next";

interface List{
    id: number;
    name: string;
}
interface ListProps{
    name:string
    list:List[]
    data:[]
}

const List = (props:ListProps) => {
    console.log(props.data);
    return (
        <div>
            <Head>
                <title>list page </title>
            </Head>
            <h1>我是列表页</h1>
            <Link href="/">
                <a>go home</a>
            </Link>
            <ListWrap>
                there are nothing
            </ListWrap>
            <p>{props.name}</p>
            {
                props.list.map(item=>{
                    return <Link key={item.id} href={`/list/${item.id}`}>
                        <a>{item.name}</a>
                    </Link>
                })
            }
            <div>
                <ul>
                    {
                        props.data.map((item:any)=>{
                            return <li key={item.id}>
                                {item.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
//getStaticProps 在页面build构建时候为组件注入一些属性;直接生成静态文件
export const getStaticProps : GetStaticProps= async()=>{
    //此处我们可能获取服务器接口数据
    const data = await fetch ("http://jsonplaceholder.typicode.com/users").then(res=>res.json())
    return{
        props:{
            name:"Terry",
            list:[{
                id:1,
                name:"Terrance",
            },{
                id:2,
                name:"TerryYan",
            }],
            data:data
        }
    }
}

export default List;