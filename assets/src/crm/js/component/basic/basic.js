/**
 * Created by admin on 2017/5/5.
 * xzqing
 */
import React ,{Component} from  'react';
import {Link} from 'react-router'
import { Drawer, List, NavBar } from 'antd-mobile';
import './basic.less'

class Basic extends  Component {

  state = {
    open: false,
    position: 'left',
  };

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const menu =
      [{
        imgUrl:require('../../../img/icon_enterprise.png'),
        link:'/customerVisit',
        title:'客户拜访'
      },
        {
          imgUrl:require('../../../img/icon_enterprise.png'),
          link:'/etCustomer',
          title:'企业客户'
        },
        {
          imgUrl:require('../../../img/icon_contacts.png'),
          link:'/contacts',
          title:'联系人'
        },
        {
          imgUrl:require('../../../img/icon_business.png'),
          link:'/businessOpportunities',
          title:'潜在业务机会'
        },
        {
          imgUrl:require('../../../img/icon_userview.png'),
          link:'/customerMap',
          title:'客户地图'
        },
        {
          imgUrl:require('../../../img/icon_scanning.png'),
          link:'/cardScanning',
          title:'名片扫描'
        }];
    const sidebar = (
    <div>
      <div className="nav-top-image">
        <img src={require('../../../img/icon_sign.png')} alt=""/>
        <div>工号：75173</div>
      </div>
      <List
        renderHeader = 'MENU'
        renderFooter="APPULICATION">
        {menu.map((i, index) => {
          return (<Link key={index} onClick={this.onOpenChange} to={i.link} >
            <List.Item
                 thumb={i.imgUrl}
                 style={window.location.pathname===i.link?{backgroundColor:'rgb(36,38,50)'}:{}}
          >{i.title}</List.Item>
          </Link>);
        })}
      </List>
    </div>
    );

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div>

      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
        sidebar={sidebar}
        {...drawerProps}
      >
        <NavBar iconName="null"
                leftContent={[
                  <span key='0' className="iconfont icon-caidan"></span>
                ]}
                rightContent = {[
                  <span key='0' className="iconfont icon-jia"></span>
                ]}
                onLeftClick={this.onOpenChange}>{this.props.title}</NavBar>
        {this.props.children}
      </Drawer>
    </div>);
  }
}

export default Basic;
