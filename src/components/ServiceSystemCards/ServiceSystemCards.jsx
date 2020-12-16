import { connect } from 'dva'
import React from 'react'
import { List,Card,Statistic } from "antd"
import * as service from "../../services/ServiceDataService"
import * as systemName from "../../enums/SystemNameSet"
import * as systemColors from "../../enums/SystemColorSet"
import * as style from "./ServiceSystemCards.css"

function ServiceSystemCards({ propsData }) {

    const generateValueStyle = (index) => {
        return {
            "color" : systemColors.getSystemColorsByIndex(index),
            "fontWeight": "700"
        }
    }

    const generateTitleStyle = () => {
        return {
            fontSize : "14px",
            fontWeight : "700",
            background : "#f4f4f4"
        }
    }

    return (
        <List
            id = "systemcardlist"
            header = {<div className = {style.listhead}>应用服务访问总量</div>}
            grid={{ gutter: 5, column: systemName.getApplicationNames().length -1 }}
            dataSource={service.process_CountServiceRecordByHost(propsData.dataSource)}
            renderItem={item => {
                return <List.Item>
                    <Card
                        headStyle = {generateTitleStyle()}
                        title={item.name}>
                        <Statistic 
                            valueStyle={generateValueStyle(item.systemId)}
                            
                            value={item.count}
                        />
                    </Card>
                </List.Item>
            }}>
        </List>
    )
}


const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

export default connect(maps)(ServiceSystemCards)
