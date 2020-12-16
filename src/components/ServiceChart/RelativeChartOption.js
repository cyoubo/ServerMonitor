import * as systemNames from "../../enums/SystemNameSet"
import * as systemColors from "../../enums/SystemColorSet"

const curveness_defalut = [
    -0.7,0.7,-0.6,0.6,-0.5,0.5,-0.4,0.4,-0.3,0.3,-0.2,0.2
]

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
                    color: systemColors.getSystemColorsByIndex([value.to]),
                    curveness: curveness_defalut[index%curveness_defalut.length]
                }
            }
        })
    }
    return options
}

export function initialOption() {
    let options = {
        title: {
            show : true,
            text: '数据流向关系图',
            top: 'top',
            left: 'left',
            padding: [16, 16],
            textStyle: {
                fontFamily: "Microsoft YaHei"
            }
        },
        backgroundColor: "#f4f4f4",
        animationDuration: 1500,
        animationDurationUpdate: 100,
        animationEasingUpdate: 'cubicOut',
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
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
            symbolSize: index === 0 ? 100 : 70,
            category: index,
            itemStyle: {
                color: systemColors.getSystemColorsByIndex(index)
            },
            x:coordinate[index][0],
            y:coordinate[index][1],
            label: {
                position : calLabelPostion(coordinate[index][1])
            }
        })
    }
    nodes[0].label = { position : "inside"}
    options.series[0].data = nodes
    return options
}

const coordinate = [
    [55,50],
    [10,30],
    [20,80],
    [40,10],
    [70,90],
    [90,40],
] 

function calLabelPostion(y_coor) {
    if(y_coor === 50)
        return "inside";
    else if(y_coor> 50)
        return "bottom"
    else
        return "top"
}