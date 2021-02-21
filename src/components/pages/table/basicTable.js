import React, { Component } from 'react'
import { Card,Modal,Table,message,Button } from 'antd'
import axios from './../../../axios'
import Utils from './../../../utils/utils'

export default class BasicTable extends Component {

    state={
        dataSource2:[]
    }

    params={
        page:1
    }

    componentDidMount(){
        const dataSource = [
            {
                id:"0",
                userName:"Jack",
                sex:"1",
                state:"1",
                interset:"1",
                birthday:"2021-02-21",
                address:"北京市海淀区奥林匹克公园",
                time:"09:00"
            },
            {
                id:"1",
                userName:"Tom",
                sex:"1",
                state:"1",
                interset:"1",
                birthday:"2021-02-21",
                address:"北京市海淀区奥林匹克公园",
                time:"09:00"
            },
            {
                id:"2",
                userName:"Lily",
                sex:"1",
                state:"1",
                interset:"1",
                birthday:"2021-02-21",
                address:"北京市海淀区奥林匹克公园",
                time:"09:00"
            },
        ]
        dataSource.map((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource
        })
        this.request();
    }

    //动态获取mock数据
    request = () => {
        // let baseUrl = "https://www.fastmock.site/mock/e07e0114640b799e1e545ba34e6d8cc7/mockapi"
        // axios.get(baseUrl+"/table/list")
        // .then(res=>{
        //     if(res.status === 200 && res.data.code === 0){
        //         this.setState({
        //             dataSource2:res.data.result
        //         })
        //     }
        // })
        let _this = this;
        axios.ajax({
            url:"/table/list",
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then(res => {
            if(res.code === 0){
                res.result.list.map((item,index)=>{
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current) => {
                        _this.params.page = current;
                        this.request()
                    })
                })
            }
        })
    }

    onRowClick = (record,index) => {
        let selectKey = [index];
        Modal.info({
            title:"信息",
            content:`用户名：${record.userName}，爱好：${record.interset}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }

    handleDelete = () => {
        let rows = this.state.selectedRows;
        let ids = [];
        // console.log(rows)
        rows.map(item => {
            ids.push(item.id)
        })
        Modal.confirm({
            title:"删除提示",
            content:`你确定要删除这些数据么？${ids.join(',')}`,
            onOk:()=>{
                message.success("删除成功");
                this.request();
            }
        })
    }

    render() {
        const columns = [
            {
                title:"id",
                dataIndex:"id"
            },
            {
                title:"用户名",
                dataIndex:"userName"
            },
            {
                title:"性别",
                dataIndex:"sex",
                render(sex){
                    return sex == 1 ? "男" : "女";
                }
            },
            {
                title:"状态",
                dataIndex:"state",
                render(state){
                    let config = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子一枚',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title:"爱好",
                dataIndex:"interset",
                render(interset){
                    let config = {
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'踢足球',
                        '4':'跑步',
                        '5':'爬山',
                        '6':'骑行',
                        '7':'桌球',
                        '8':'麦霸'
                    }
                    return config[interset];
                }
            },
            {
                title:"生日",
                dataIndex:"birthday"
            },
            {
                title:"地址",
                dataIndex:"address"
            },
            {
                title:"早起时间",
                dataIndex:"time"
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys
        const rowSelection={
            type:"radio",
            selectedRowKeys
        }
        const rowCheckSelection={
            type:"checkbox",
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{marginTop:10}}>
                    <Table 
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                              onClick: ()=>{
                                  this.onRowClick(record,index)
                              }
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-多选" style={{marginTop:10}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
