import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  

export default class SpiderChart extends Component {
    getOption = () => {
        return {
             title: {
                text: '基础雷达图'
            },
            tooltip : {},
                legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
             toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
            }
            },
            indicator: [
            { name: 'sales', max: 6500},
            { name: 'Administration', max: 16000},
            { name: 'Information Techology', max: 30000},
            { name: 'Customer Support', max: 38000},
            { name: 'Development', max: 52000},
            { name: 'Marketing', max: 25000}
            ]
            },
            series: [{
                name: 'Budget vs spending',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : 'Allocated Budget'
                    },
                    {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : 'Actual Spending'
                    }
                ]
            }]
        };
    };
    render() {
        return (
           <div>
                <label> <b>Render a Spidar echart</b></label>
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '450px', width: '100%'}}
                    className='react_for_echarts' />
            </div>
        )
    }
}
