import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  


export default class DonutChart extends Component {
    getOption = () => {
    return {
      title: {
        text: 'Simple Chart'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['邮件营销','联盟广告','视频广告']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };
  render() {
    return (
      <div className='examples'>
        <div className='parent'>
          <label> <b>Render a Simple echart </b></label>
          <ReactEcharts
            option={this.getOption()}
            style={{height: '350px', width: '100%'}}
            className='react_for_echarts' />
        </div>
      </div>
    );
  }
}
