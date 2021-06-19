import React,{useState} from "react";
const Other = ()=>{
    const [color,setColor]= useState("red");
    const handleColor = ()=>color === "red"?setColor("blue"):setColor("red");
    return (
        <div>
            <h1>hello style pages</h1>
            <div>我是大Terrance</div>
            <div className="terry">我是大Terry</div>
            <style jsx>
                {
                    `
                        div{color:${color}}
                        .terry{color:blue}
                    `
                }
            </style>
            <button onClick = {handleColor}>change color</button>
        </div>
    )
}

export default Other;