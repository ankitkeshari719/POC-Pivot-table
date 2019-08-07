import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  

export default class PieChart extends Component {
    data = [
        { value: 335, name: 'Software Developer' },
        { value: 310, name: 'Lead Software Developer' },
        { value: 234, name: 'Project manager' },
        { value: 135, name: 'HR' },
        { value: 1548, name: 'Intern' }
    ];
    getOption = () => {
        return {
            tooltip : {
                tritrigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['Software Developer','Lead Software Developer','Project manager','HR','Intern']
            },
             toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
             itemStyle: {
                // shadow size
                shadowBlur: 200,
                // horizontal offset of shadow
                shadowOffsetX: 0,
                // vertical offset of shadow
                shadowOffsetY: 0,
                // shadow color
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            series: [{
                name:'GS Lab',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                 color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae'],
                data:this.data
            }]
        };
    };
    render() {
        return (
            <div>
                <label> <b>Render a Donut echart</b></label>
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '350px', width: '100%'}}
                    className='react_for_echarts' />
            </div>
        )
    }
}
