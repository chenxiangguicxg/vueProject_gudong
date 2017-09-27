/* 
* @Author: cxg
* @Date:   2017-06-28 14:37:00
* @Last Modified by:   cxg
* @Last Modified time: 2017-07-19 10:57:43
*/
 
function getPieOption(pieColor, chartTitle, pieSeriesName, startAngle, pieRadius, pieCenter, labelShow, labelPosition, labelFormatter, labelTextStyle, labelLine, pieData) {
    var chartOption = {
        calculable: false,
        color: pieColor,
        title: {
            text: chartTitle,
            textAlign: 'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        }, 
        series: [{
            name: pieSeriesName,
            type: 'pie',
            startAngle: startAngle,
            radius: pieRadius,
            center: pieCenter,
            label: {
                normal: {
                    show: labelShow,
                    position: labelPosition,
                    formatter: labelFormatter,
                    textStyle: labelTextStyle
                }
            },
            labelLine: {
                normal: {
                    show: labelLine
                }
            },
            // itemStyle: {
            //     normal: {
            //         color: pieColor
            //     }
            // },
            data: pieData
        }]
    } 
    return chartOption;
};

function getCartesianOption(chartTitle, legendOrient, legendAlign, legendData, gridLeft, gridTop, gridRight, gridBottom, xAxisType, xAxisData, yAxisType, yAxisData, seriesData) {
    var chartOption = { 
        title: {
            text: chartTitle,
            x: 'center',
            y: '10'
        },
        legend: {
            orient: legendOrient,
            left: legendAlign,
            y: '40',
            data: legendData
        },
        grid: {
            left: gridLeft,
            top: gridTop,
            right: gridRight,
            bottom: gridBottom
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: false,
        xAxis: [{
            type: xAxisType,
            data: xAxisData
        }],
        yAxis: [{
            type: yAxisType,
            splitArea: {
                show: true
            },
            data: yAxisData
        }],
        series: seriesData
    }
    return chartOption;
}
function byId(id) {
    return document.getElementById(id);
};

// 设置饼图的颜色
let getPieColor = (colortype, color1, color2, color3) => {
    return [{
        type: colortype,
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: color1 // 0% 处的颜色
        }, {
            offset: 1, color: color2 // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }, color3];
}

//获取图表系列值
let getSeriesData = (seriesName, chartType, seriesDatas) => {
    return {
        name: seriesName,
        type: chartType,
        data: seriesDatas
    }
}


export {
    getPieOption,
    getCartesianOption,
    byId,
    getPieColor,
    getSeriesData
}
