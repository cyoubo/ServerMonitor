import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import * as options from "./RelativeChartOption";
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar

function ServiceChart({ propsData }) {

    useEffect(() => {
        let myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption(options.initialOption())
    }, [])

    useEffect(() => {
       let myChart = echarts.getInstanceByDom(document.getElementById('chart'))
       if(myChart!==undefined)
       {
            let newOption = options.modifyOptionByPropsData(myChart.getOption(), propsData)
            console.log(newOption.series[0].data[1])
            myChart.setOption(newOption)
       }
    }, [propsData])

    return (
        <div>
            <div id="chart" 
                style={{ height: "400px" }}></div>
            <div>
                <Table></Table>
            </div>
        </div>
    )
}

const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

export default connect(maps)(ServiceChart)
