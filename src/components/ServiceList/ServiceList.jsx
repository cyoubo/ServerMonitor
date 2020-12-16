import { connect } from 'dva'
import React from 'react'
import { List } from "antd"
import ServiceListItem from '../ServiceListItem/ServiceListItem'
import * as style from "./ServiceList.css"

function ServiceList({ propsData }) {

    return <List
        header = {<div className = {style.listheader}>实时服务访问列表</div>}
        className={style.recordlist}
        dataSource={propsData.dataSource}
        loading = {propsData.dataSource.length === 0}
        renderItem={(item) => {
            return <ServiceListItem item={item}>
            </ServiceListItem>
        }}>
    </List>
}

const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

export default connect(maps)(ServiceList)

