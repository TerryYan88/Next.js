import Head from 'next/head'
import Router from "next/router";
import Link from "next/link";
import { GetServerSideProps } from "next";
import dbConnect from "../util/dbConnect";
import Pet from "../models/pets";
//服务器端直接直接输出的html标签,需要使用到getServerSideProps, 在页面编译的时候执行,可以获取一下服务器的数据
//这段代码的意思是在每一次发送请求的时候执行,页面初始化或者刷新的时候执行
//动态更新数据一般在这里请求
export const getServerSideProps: GetServerSideProps = async () => {
  dbConnect();
  const data = await Pet.find();
  return {
    props: {
      data: data.map(item => item.name),
    }
  }
}

interface HomeProps {
  data: []
}

function Home(props: HomeProps) {


  const onGoToList = () => {
    Router.push("/list");
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <button onClick={onGoToList}>to list page</button>
      <div>
        <Link href="/list">
          <a>to list</a>
        </Link>
      </div>
      <div>
        <Link href="/pets">
          <a>to pets page</a>
        </Link>
      </div>
      <div className="bg-red-500 px-6 py-3 text-white rounded m-6">
        <div>列表</div>
        <ul>
          {
            //服务器端直接直接输出的html标签
            props.data && props.data.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
          <Link href="/other">
            <a> to style page</a>
          </Link>
    </div>
  )
}
export default Home;
