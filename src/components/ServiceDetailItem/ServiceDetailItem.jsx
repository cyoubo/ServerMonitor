import React from 'react'
import "./ServiceDetailItem.css"

export default function ServiceDetailItem({item}) {
    return (
        <div>
            <div>
                {item.time}
            </div>
            <div>
                {item.name}
            </div>
        </div>
    )
}
