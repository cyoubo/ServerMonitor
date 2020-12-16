import { Drawer } from 'antd'
import React, { useEffect, useReducer, useRef } from 'react'
import { connect } from 'dva'
import * as options from "./RelativeChartOption";
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/graph';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/tooltip';
import * as style from "./ServiceChart.css"
import * as service from "../../services/ServiceDataService"
import ServiceDetailItem from '../ServiceDetailItem/ServiceDetailItem';

function ServiceChart({ propsData }) {

    const [state, dispatch] = useReducer(reducer, state_intial)
    const ref_out = useRef()
    const ref_chart = useRef()

    useEffect(() => {
        let myChart = echarts.init(ref_chart.current);
        myChart.setOption(options.initialOption())
        myChart.on('click', (event) => {
            if(event.dataIndex!== 0)
                dispatch(stateAction(true, event.dataIndex))
        })
        window.onresize = () => {
            if (myChart !== undefined) {
                myChart.resize()
            }
        }
        return () => {
            window.onresize = undefined
        }
    }, [])

    useEffect(() => {
        let myChart = echarts.getInstanceByDom(ref_chart.current)
        if (myChart !== undefined) {
            let newOption = options.modifyOptionByPropsData(myChart.getOption(), propsData)
            myChart.setOption(newOption)
        }
    }, [propsData])

    const onCloseDrawerClickHandle = () => {
        dispatch(stateAction(false, -1))
    }

    const ongenerateDetailItem = () => {
        return service.process_FilterServiceRecordBySystemId(propsData.dataSource, state.systemId).map((value, index) => {
            return <ServiceDetailItem key = {index} item = {value}></ServiceDetailItem>
        })
    }

    return (
        <div
            ref={ref_out}
            className={style.chart_out}>
            <div
                ref={ref_chart}
                className={style.chart}>
            </div>
            <Drawer
                style={{ position: 'absolute' }}
                placement="right"
                title="服务调用详情"
                closable={true}
                visible={state.drawerVisible}
                getContainer={ref_out.current}
                onClose={onCloseDrawerClickHandle}>
                {ongenerateDetailItem()}
            </Drawer>
        </div>
    )
}

const maps = (reduxStatus) => {
    return {
        propsData: reduxStatus.ServerDataModel
    }
}

const state_intial = {
    drawerVisible: false,
    systemId: -1
}

function stateAction(drawerVisible, systemId) {
    return {
        drawerVisible: drawerVisible,
        systemId: systemId
    }
}

function reducer(state, action) {
    return action
}

export default connect(maps)(ServiceChart)
