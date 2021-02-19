import React, { Component } from 'react'
import { Card,Button,Tabs,message,Icon } from 'antd';
import './ui.less';

const { TabPane } = Tabs;
export default class tabs extends Component {
    handleCallback = (key) =>{
        message.info("Hi,您选择了页签:"+key)
    }

    componentWillMount(){
        const panes=[
            {
                title:"Tab 1",
                content:"Tab 1",
                key:"1"
            },
            {
                title:"Tab 2",
                content:"Tab 2",
                key:"2"
            },
            {
                title:"Tab 3",
                content:"Tab 3",
                key:"3"
            },
        ]
        this.setState({
            panes
        })
    }

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">
                            欢迎学习react课程
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                            欢迎学习react课程
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            React是一个非常受欢迎的MV*框架
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">
                            欢迎学习react课程
                        </TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">
                            欢迎学习react课程
                        </TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">
                            React是一个非常受欢迎的MV*框架
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs 
                        defaultActiveKey="1" 
                        onChange={this.handleCallback}
                        type="editable-card"
                    >
                        {
                            this.state.panes.map((panel)=>{
                                return <TabPane 
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
