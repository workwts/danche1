import React, { Component } from 'react';
import { Row,Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from 'axios'

export default class Header extends Component {
    componentWillMount (){
        this.setState({
            userName:"河畔一角"
        })
        setInterval(()=>{
            let sysTime=Util.formateData(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData (){
        axios.get("https://devapi.qweather.com/v7/weather/now?location=101071201&key=13ce1a680faf4c0a866ac9846926042f")
        .then(res=>{
            let weatherPic = res.data.now.icon;
            let data = res.data.now.text + " " + res.data.now.windDir;
            this.setState({
                dayPictureUrl:"assets/weather-icon-S1/color-64/"+weatherPic + '.png',
                weather:data
            })
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="data">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span  className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
