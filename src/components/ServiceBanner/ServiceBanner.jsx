import React, { useState,useEffect } from 'react'
import moment from "moment"
import * as style from "./ServiceBanner.css"

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
        <div className = {style.banner_out}>
            <div className = {style.banner_title}>资产记录监管平台</div>
            <div className = {style.banner_time}>{formateDate()}</div>        
        </div>
    )
}
