import { useEffect,useState } from "react"



const Others = ()=>{
    const [data,setDate] = useState([]);
    const request = async()=>{
        try{
         const data = await fetch("http://jsonplaceholder.typicode.com/users")
         .then(res=>res.json())
         setDate(data)
        }catch(e){
     
        }
     }
     //console.log(data);
    useEffect(()=>{
        request()
    },[])
    return (
        <div>
              <ul>
                    {
                        data&&data.map((item:any)=>{
                            return <li key={item.id}>
                                {item.name}
                            </li>
                        })
                    }
                </ul>
                <div>
                    <a href="/">to home</a>
                </div>
        </div>
    )
}

export default Others