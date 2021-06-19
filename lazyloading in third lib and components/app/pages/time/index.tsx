import React,{useState} from 'react';
import dynamic from "next/dynamic";


const One = dynamic(import("../../component/one"))

const Time = ()=>{

    const [nowTime,setTime] = useState<any>(Date.now());
    const changeTime = async()=>{
        try{
            const moment:any = await import('moment');
            setTime(moment(Date.now()).format())
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div>
            <h1>lazyloading</h1>
            <div>显示时间为:{nowTime}</div>
            <button onClick={changeTime}>改变时间格式</button>
            <One/>
        </div>
    )
}

export default Time;