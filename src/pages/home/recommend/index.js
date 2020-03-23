import React , { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Tabs, Icon } from 'antd';
import './Recommend.css';
import Homelist from './homeList';
import { HomelistWrapper } from './style';

const { TabPane } = Tabs;

class Recommend extends Component{
  render(){
    return(
      <Tabs defaultActiveKey="1" className="tabCon">
        <TabPane
        tab={
          <span className="navCon"><Icon type="fire" />热门动态</span>
        }
          key="1"
          >
            <HomelistWrapper>
              <Homelist/>
            </HomelistWrapper> 
        </TabPane>
        <TabPane
        tab={
          <span className="navCon"><Icon type="thunderbolt" />个性动态</span>
        }
          key="2"
          >
          <HomelistWrapper>
            第二个导航栏消息
          </HomelistWrapper> 
        </TabPane>
    </Tabs>
    );
  }
}

const mapState = (state) =>{
  return {
    
  }
}

const mapdispatch = (dispatch) =>{
  return {
    
  }
}

export default connect(mapState,mapdispatch)(Recommend);