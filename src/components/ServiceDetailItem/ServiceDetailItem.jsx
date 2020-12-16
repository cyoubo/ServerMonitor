import React from 'react'
import * as style from "./ServiceDetailItem.css"

export default function ServiceDetailItem({item}) {
    return (
        <li className = {style.item_out}>
            <div className = {style.item_head}>
                <div className = {style.item_time}>
                    {item.time}
                </div>
                <div className = {style.item_host}>
                    {item.host}
                </div>
            </div>
            <div className = {style.item_name}>
                {item.name}
            </div>
        </li>
    )
}
