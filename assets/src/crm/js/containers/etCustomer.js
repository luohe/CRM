/**
 * @lkm enterprise customer
 * @@ 2017-5-5 establish
 */
import React ,{Component} from  'react';
import { NavBar, Icon } from 'antd-mobile';

class EtCustomer extends  Component {
  componentDidMount(){

  }
  render(){
    return (
      <NavBar leftContent="back" mode="" onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="1" type="adduser" />,
              ]}
      >企业客户</NavBar>
    )
  }
}

export default EtCustomer;