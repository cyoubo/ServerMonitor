import * as systemNames from "../../enums/SystemNameSet"


export function modifyOptionByPropsData(options, propsData) {
    //添加调用信息（连接线）
    if (propsData.dataSource !== undefined) {
        options.series[0].links = propsData.dataSource.map((value, index) => {
            return {
                source: value.from,
                target: value.to,
                key: index,
                symbol: ["none", "arrow"],
                symbolOffset: [0, 8],
                lineStyle: {
                    width: 3,
                    color: 'target',
                    curveness: Math.random() * 0.8 - Math.random() * 0.5
                }
            }
        })
    }
    return options
}

export function initialOption() {
    let options = {
        title: {
            text: '数据流向关系图',
            top: 'top',
            left: 'right',
            padding: [16, 16],
            textStyle: {
                fontFamily: "Microsoft YaHei"
            }
        },

        legend: [{
            data: systemNames.getApplicationNames().map(function (a) {
                return a.name;
            }),
            orient: "vertical",
            left: "2.5%",
            top: "bottom"
        }],
        animationDuration: 1500,
        animationDurationUpdate: 100,
        animationEasingUpdate: 'cubicOut',
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                roam: true,
                zoom: 0.7,
                categories: systemNames,
                focusNodeAdjacency: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}',
                    fontSize: 16
                },
                emphasis: {
                    lineStyle: {
                        width: 5
                    }
                }
            }
        ]
    }

    //添加节点信息
    let nodes = []
    for (let index = 0; index < systemNames.getApplicationNames().length; index++) {
        nodes.push({
            name: systemNames.getApplicationNameByIndex(index),
            symbolSize: 70,
            category: index
        })
    }
    nodes[0].x = 100
    nodes[0].y = 100
    nodes[0].label = { position : "inside"}
    options.series[0].data = nodes
    return options
}