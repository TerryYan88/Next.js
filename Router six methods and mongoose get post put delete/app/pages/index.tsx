import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from "next/router";
import Link from "next/link";
export default function Home() {
  //前提一定要引入Router
  //routeChangeStart 开始转变路由
  //routeChangeComplete 路由转变完成
  //beforeHistroyChange 在history模式下改变路由之前
  //routeChangeError 路由变化发生错误
  //hashChangeStart
  //hashChangeComplete
  Router.events.on("routeChangeStart",(ctx,...args) => { //ctx 返回路由值
    console.log("1.routeChangeStart->路由开始变化",ctx,args);
  })
  Router.events.on("beforeHistroyChange",(ctx,...args)=>{//ctx 返回路由值
    console.log("2.beforeHistroyChange->在history改变之前",ctx,args);
  })
  Router.events.on("routeChangeComplete",(ctx,...args)=>{//ctx 返回路由值
    console.log("3.routeChangeComplete->路由变化结束",ctx,args);
  })
  Router.events.on("ChangeError",(ctx,...args)=>{//ctx 返回路由值
    console.log("4.routeChangeError->路由发生错误",ctx,args);
  })
  Router.events.on("hashChangeStart",(ctx,...args)=>{//ctx 返回路由值
    console.log("5.hashChangeStart->hash 路由开始",ctx,args);
  })
  Router.events.on("hashChangeComplete",(ctx,...args)=>{//ctx 返回路由值
    console.log("6.hashChangeComplete->hash路由结束",ctx,args);
  })

  const onGoToList = ()=>{
    Router.push("/list");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <button onClick={onGoToList}>to list page</button>
      <div>
        <Link href="/list">
          <a>to list</a>
        </Link>
      </div>
    </div>
  )
}
