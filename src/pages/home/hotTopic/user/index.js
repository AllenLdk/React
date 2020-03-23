import React ,{ Component,Fragment } from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './user.css';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class User extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Fragment>
        {this.props.loginstate ? 
          <List style={{border:"none"}}
          dataSource={[
            {
              name: 'Allen',
            }
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  用户信息
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" size={80}/>
                }
                title={<Link to="/personal" style={{margin:"20px 0 10px 10px",fontSize:"20px",display:"block"}}>{item.name}</Link>}
                description={<p style={{margin:"20px 0 0 10px"}}>NO ZUO NO DIE</p>}
              />
            </List.Item>
          )}
        />
          : 
          <p className="Welcome">
          你好，陌生人！
          </p>
          }

        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>用户信息</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="昵称" content="Allen" />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="邮箱" content="1794680235@qq.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="城市" content="重庆" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="国籍" content="中国" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="生日" content="1998/6/4" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="个人网站" content="www.allenweb.com" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="个性签名"
                content="NO ZUO NO DIE"
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>主队</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="球队" content="巴塞罗那" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="球场" content="诺坎普球场" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="所属地" content="西班牙加泰罗尼亚" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="球队官方网站" content={<a>https://www.fcbarcelona.com</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="球队简介"
                content="巴塞罗那足球俱乐部（Fútbol Club Barcelona），简称巴萨（barça），是一家位于西班牙巴塞罗那市的足球俱乐部，西班牙足球甲级联赛传统豪门之一。1899年11月29日由瑞士人胡安·甘伯创立。球队主场诺坎普球场可容纳接近十万名观众，是全欧洲最大及世界第二大的足球场。"
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>收货地址</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="收货人" content="Allen" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="联系电话" content="+86 181 6632 3171" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="地址"
                content="重庆市江北区南桥寺可乐小镇B区"
              />
            </Col>
          </Row>
        </Drawer>
      </Fragment>
    );
  }
}

const mapState = (state) =>{
  return {
    loginstate:state.getIn(['home','login'])
  }
}

export default connect(mapState,null)(User);