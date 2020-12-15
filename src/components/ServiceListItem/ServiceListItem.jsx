import React from 'react'
import {List} from "antd"
import * as style from "./ServiceListItem.css"

export default function ServiceListItem({item}) {
    return (
       <List.Item 
            className = {style.list_item}>
           <div>{item.time}</div>
           <div>{item.name}</div>
       </List.Item>
    )
}
