import Head from "next/head";


interface ListProps{
    name: string;
    data:[];
}

const List = (props:ListProps) => {
    return (
        <>
            <Head>
                <title>这个是列表页</title>
            </Head>
            <div>
                <h1>列表页面</h1>
                <p>这里是有很多列表</p>
                <p><a href="/">返回首页</a></p>
                <p>{props.name}</p>
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
        </>
    )
}
// getServerSideProps 动态的获取数据每次访问都会触发这个操作,可以在这里取数据,渲染在页面里
// 这个操作相当于服务器处理; 基本在这里做ajax请求;这个方法需要返回props节点,最后会合并到属性上
export const getServerSideProps = async (ctx:any)=>{
    const data = await fetch("http://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    return{
        props:{
            name:"Tom",
            data
        }
    }
}

export default List