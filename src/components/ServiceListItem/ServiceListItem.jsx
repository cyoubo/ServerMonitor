import React from 'react'
import {List} from "antd"

export default function ServiceListItem({item}) {
    return (
       <List.Item>
           <div>{item.time}</div>
           <div>{item.name}</div>
       </List.Item>
    )
}
