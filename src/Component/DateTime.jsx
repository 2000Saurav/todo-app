import { useEffect, useState } from "react"

export default function DateTime(){
    const [dateTime, setDateTime] = useState('')

    useEffect(()=>{
        const updatedDateTime = setInterval(() => {
            const currDateTime = new Date();
            const currDate = currDateTime.toLocaleDateString();
            const currTime = currDateTime.toLocaleTimeString();
            setDateTime(`${currDate} - ${currTime}`)
        }, 1000);
        return(()=> clearInterval(updatedDateTime))
        
    }, [])

    return(
        <>
        <h2>{dateTime}</h2>
        </>
    )
}