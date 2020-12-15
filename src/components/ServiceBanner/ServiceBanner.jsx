import React, { useState,useEffect } from 'react'
import moment from "moment"

export default function ServerBanner() {

    const [current, setcurrent] = useState(Date.now())

    function formateDate() {
      return moment(current).format("YYYY-MM-DD HH:mm:ss")  
    } 

    useEffect(() => {
        const taskId = setInterval(() => {
            setcurrent(Date.now())
        }, 1000);
        return () => {
            clearInterval(taskId)
        }
    }, [])

    return (
        <div>
            <div>资产记录监管平台</div>
            <div>{formateDate()}</div>        
        </div>
    )
}
