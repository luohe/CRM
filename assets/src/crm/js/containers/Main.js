/**
 * Created by admin on 2017/5/8.
 */

import React,{ Component } from 'react';
import {default as Basic} from '../component/basic/basic'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends Component {
  constructor(){
    super();
    this.state = {title:'文天'}
  }
  //路径检测后改变title
  handleTitle(){
    switch (window.location.pathname){
      case '/customerVisit' :this.state.title = '客户管理';
        break;
      case '/etCustomer' :this.state.title = '企业客户';
        break;
      case '/contacts' :this.state.title = '联系人';
        break;
      case '/businessOpportunities' :this.state.title = '潜在业务机会';
        break;
      case '/customerMap' :this.state.title = '客户地图';
        break;
      case '/cardScanning' :this.state.title = '名片扫描';
        break;
      default :(()=>{
        this.state.title = '请补填title';
        throw ("container=>Main文件中填写路径匹配title")
      })()
    }
  }
  render() {
    const { children } =this.props;
    this.handleTitle();
    return (
      <Basic title={this.state.title}>
        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </Basic>
    )
  }
}
