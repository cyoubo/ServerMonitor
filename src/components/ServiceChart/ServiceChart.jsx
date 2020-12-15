import { Button, Table, Drawer } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import * as options from "./RelativeChartOption";
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/graph';  //折线图是line,饼图改为pie,柱形图改为bar
import * as style from "./ServiceChart.css"

function ServiceChart({ propsData }) {

    const [drawerVisible, setdrawerVisible] = useState(false)

    useEffect(() => {
        let myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption(options.initialOption())
    }, [])

    useEffect(() => {
        let myChart = echarts.getInstanceByDom(document.getElementById('chart'))
        if (myChart !== undefined) {
            let newOption = options.modifyOptionByPropsData(myChart.getOption(), propsData)
            myChart.setOption(newOption)
        }
    }, [propsData])

    const generateTableTitle = () => {
        return (
            <div className = {style.title_out}>
                <div className = {style.title_text}>访问详情</div>
                <Button 
                    onClick = {onBtnCloseTableClickHandle}
                    className = {style.title_btn}
                    type = "link">关闭</Button>
            </div>
        )
    }

    const onBtnCloseTableClickHandle = () => {

    }
 
    return (
        <div className={style.chart_out}>
            <div
                className={style.chart}
                id= "chart"></div>
            <Drawer
                    visible = {drawerVisible}
                >
                <div 
                    id = "chart_table"
                    className={style.chart_table}>
                    <Table
                        title={generateTableTitle}
                        ></Table>
                </div>
            </Drawer>
        </div>
    )
}

const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

export default connect(maps)(ServiceChart)
