


export function modifyOptionByPropsData(option, propsData)  {
    option.series[0].data[1] = Math.random() * 3000
    return option
}

export function initialOption() {
    let options = {
        title: {
            text: '数据流向关系图',
            top: 'top',
            left: 'right',
            padding: [16, 16],
            textStyle : {
                fontFamily : "Microsoft YaHei"}
        },
        animationDuration: 1500,
        animationDurationUpdate : 100,
        animationEasingUpdate: 'cubicOut',
        xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '订单量',
                type: 'bar',
                data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
            }
        ]
    }
    return options
}