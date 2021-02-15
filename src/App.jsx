import './App.css';
import { Button } from 'antd';
import React,{ Component } from 'react';
// import 'antd/dist/antd.css';

export default class App extends Component {
  state={
    count:0
  }
  handleAdd=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
        <div className="content">
          hello world
          <Button onClick={this.handleAdd}>点击一下</Button>
          <p>{this.state.count}</p>
        </div>
    )
  }
}
