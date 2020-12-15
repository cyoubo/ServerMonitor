import { connect } from 'dva'
import React from 'react'
import { List } from "antd"
import ServiceListItem from '../ServiceListItem/ServiceListItem'

function ServiceList({ propsData }) {

    return <List
        dataSource={propsData.dataSource}
        bordered
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

