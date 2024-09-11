import React, { useEffect, useState } from "react";


export default function GitHub() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Ranjan-Ravii')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <>
            <div className=" flex justify-around text-center bg-gray-500 m-4 p-4 text-white text-3xl">
                <img
                    className="h-96 w-auto m-4 p-4 "
                    src="https://avatars.githubusercontent.com/u/124711830?v=4" alt="" />
                <div className=" align-bottom m-4 p-4 text-left">
                    <div>Name : {data.name}</div>
                    <div>Followers : {data.followers}</div>
                    <div>Following : {data.following}</div>
                </div>
            </div>
        </>

    )
}