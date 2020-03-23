import { Layout, Menu, Breadcrumb, Icon,List,Avatar } from 'antd';
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './SliderDemo.css';
import CopyRight from '../../../static/footer/record.png';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        {/* 左边目录列表 */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{background:"#fff"}}>
          <div className="logo" />
          <List.Item.Meta
            style={{background:"#fff",padding:"20px 10px 10px 20px"}}
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" size={50}/>
                }
                title={<p to="/personal" style={{margin:"10px 0 10px 10px",fontSize:"20px",display:"block"}}>Allen</p>}
              />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Icon type="user" />
              <span>个人资料</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="heart" />
              <span>我的关注</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="usergroup-delete" />
              <span>我的粉丝</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="message" />
                  <span>通知</span>
                </span>
              }
            >
              <Menu.Item key="4">好友消息</Menu.Item>
              <Menu.Item key="5">回复</Menu.Item>
              <Menu.Item key="6">系统消息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>记录</span>
                </span>
              }
            >
              <Menu.Item key="7">我的噜文</Menu.Item>
              <Menu.Item key="8">噜文评论</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
            <Icon type="solution" />
              <span>成就</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* 右边详情 */}
        <Layout>
          <Header style={{ background: '#fff', padding: 0,height:"80px"}}>
            <Link to="/"><Icon type="poweroff" className="returnHome"/></Link>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          <p>
          <span>渝ICP备19004915号-1</span>
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50022202000233">
                    <img src={CopyRight} alt="" style={{marginLeft:5}}/>
                    <span style={{color:"black"}}>&nbsp;渝公网安备 50022202000233号</span>
                    </a>&nbsp;此网站仅供学习以及参加比赛使用！
          </p>
          <p>Copyright © Allen 技术支持：黎东珂</p>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;