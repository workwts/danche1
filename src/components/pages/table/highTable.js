import React, { Component } from 'react'
import { Card,Modal,Table,message,Button,Badge } from 'antd'
import axios from './../../../axios'

export default class HighTable extends Component {

    state={}

    params={
        page:1
    }

    componentDidMount(){
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
        axios.ajax({
            url:"/table/high/list",
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
                    dataSource:res.result.list
                })
            }
        })
    }

    handlesortOrder = (pagination, filters, sorter) => {
        this.setState({
            sortOrder:sorter.order
        })
    }

    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title:"确认",
            content:"您确认要删除此条数据么？",
            onOk:()=>{
                message.success("删除成功")
                this.request()
            }
        })
    }

    render() {
        const columns = [
            {
                title:"id",
                width:80,
                dataIndex:"id"
            },
            {
                title:"用户名",
                width:80,
                dataIndex:"userName"
            },
            {
                title:"性别",
                width:80,
                dataIndex:"sex",
                render(sex){
                    return sex == 1 ? "男" : "女";
                }
            },
            {
                title:"状态",
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:120,
                dataIndex:"address"
            },
            {
                title:"早起时间",
                width:80,
                dataIndex:"time"
            }
        ]
        const columns2 = [
            {
                title:"id",
                width:80,
                fixed:"left",
                dataIndex:"id"
            },
            {
                title:"用户名",
                fixed:"left",
                width:80,
                dataIndex:"userName"
            },
            {
                title:"性别",
                width:80,
                dataIndex:"sex",
                render(sex){
                    return sex == 1 ? "男" : "女";
                }
            },
            {
                title:"状态",
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"生日",
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:80,
                dataIndex:"address"
            },
            {
                title:"早起时间",
                fixed:"right",
                width:80,
                dataIndex:"time"
            }
        ]
        const columns3 = [
            {
                title:"id",
                width:80,
                dataIndex:"id"
            },
            {
                title:"用户名",
                width:80,
                dataIndex:"userName"
            },
            {
                title:"性别",
                width:80,
                dataIndex:"sex",
                render(sex){
                    return sex == 1 ? "男" : "女";
                }
            },
            {
                title:"年龄",
                width:80,
                dataIndex:"age",
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title:"状态",
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:120,
                dataIndex:"address"
            },
            {
                title:"早起时间",
                width:80,
                dataIndex:"time"
            }
        ]
        const columns4 = [
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
                title:"年龄",
                dataIndex:"age"
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
                        '1':<Badge status="success" text="Success"/>,
                        '2':<Badge status="error" text="Error"/>,
                        '3':<Badge status="default" text="Default"/>,
                        '4':<Badge status="processing" text="Processing"/>,
                        '5':<Badge status="warning" text="Warning"/>,
                        '6':<Badge status="default" text="Default"/>,
                        '7':<Badge status="processing" text="Processing"/>,
                        '8':<Badge status="warning" text="Warning"/>,
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
                title:"操作",
                render:(text,item)=>{
                    return <Button size="small" type="primary" onClick={(item=>{this.handleDelete(item)})}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:2360}}
                    />
                </Card>
                <Card title="排序表格" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handlesortOrder}
                    />
                </Card>
                <Card title="操作按钮" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
