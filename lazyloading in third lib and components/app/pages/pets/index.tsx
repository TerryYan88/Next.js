import Head from "next/head";
import { useState, useEffect, ChangeEvent, useRef } from "react";
const Pets = () => {
    const [list, setList] = useState([]);
    const [ipt, setIpt] = useState("");
    const iptRef = useRef<any>("");
    useEffect(() => {
        loaData();
    }, [])

    const loaData = async () => {
        try {
            const data = await fetch("/api/pets").then(res => res.json());
            setList(data);
        } catch (e) {

        }

    }
    const saveHandle = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            fetch("/api/pets", {
                method: "POST",
                body: JSON.stringify({
                    name: ipt
                })
            })
                .then(res => res.json())
                .then(res => {
                    loaData();
                    setIpt("");
                })

        }
    }

    const handleDelete = (id: string) => () => {
        fetch(`/api/pets/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                loaData();
            })
    }
    const edit = (id: string) => () => {
        fetch(`/api/pets/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: iptRef.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                loaData();
            })
    }

    return (
        <div>
            <Head>
                <title>pet page</title>
            </Head>

            <div>宠物列表</div>
            <ul>
                <li>
                    <input
                        type="请输入内容"
                        value={ipt}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setIpt(event.target.value)}
                        onKeyUp={(event: any) => saveHandle(event)}
                        ref={iptRef}
                    />
                </li>
            </ul>
            <hr />
            <ul>
                {
                    list && list.map((item: any) => {
                        return <li key={item._id}>
                            {item.name}
                            <button onClick={handleDelete(item._id)}>删除</button>
                            <button onClick={edit(item._id)}>修改</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pets;