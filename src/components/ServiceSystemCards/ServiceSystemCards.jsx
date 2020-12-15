import { connect } from 'dva'
import React from 'react'
import { List,Card,Statistic } from "antd"
import * as service from "../../services/ServiceDataService"
import * as systemName from "../../enums/SystemNameSet"

function ServiceSystemCards({ propsData }) {

    return (
        <List
            grid={{ gutter: 5, column: systemName.getApplicationNames().length -1 }}
            dataSource={service.process_CountServiceRecordByHost(propsData.dataSource)}
            renderItem={item => (
                <List.Item>
                    <Card>
                        <Statistic 
                            title={item.name} 
                            value={item.count}
                        />
                    </Card>
                </List.Item>
            )}>
        </List>
    )
}


const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

export default connect(maps)(ServiceSystemCards)
