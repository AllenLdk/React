import React,{ Component,Fragment } from 'react';
import { Divider,Row,Col,Dropdown,Button,Menu,Icon} from 'antd';
import { FooterWrapper,CopyRightWrapper,CopyOne,CopyTwo,ListWrapper } from './style';
import Goalooo from '../../../static/header/Logo_black.png';
import CopyRight from '../../../static/footer/record.png';
import './footer.css';

class Footer extends Component{
  render(){
    const menu = (
      <Menu>
        <Menu.Item style={{listStyle:"none"}}>
          <a target="_blank" rel="noopener noreferrer" href="/">
            中文(繁體)
          </a>
        </Menu.Item>
        <Menu.Item style={{listStyle:"none"}}>
          <a target="_blank" rel="noopener noreferrer" href="/">
            English
          </a>
        </Menu.Item>
        <Menu.Item style={{listStyle:"none"}}>
          <a target="_blank" rel="noopener noreferrer" href="/">
            日本語
          </a>
        </Menu.Item>
      </Menu>
    );
    return(
      <Fragment>
        <Divider/>
          <FooterWrapper>
            <Row>
              <Col span={6}>
                <ListWrapper>
                  <h3>Goalooo</h3>
                  <span>工作机会</span>
                  <span>新闻</span>
                  <span>后台管理入口</span>
                  <span>多元化与归属感</span>
                </ListWrapper>
              </Col>
              <Col span={6}>
              <ListWrapper>
                  <h3>探索</h3>
                  <span>信任与安全</span>
                  <span>社区文明交流协议</span>
                  <span>足球杂志</span>
                  <span>培养与学习</span>
                </ListWrapper>
              </Col>
              <Col span={6}>
              <ListWrapper>
                  <h3>广告</h3>
                  <span>推广与合作</span>
                  <span>交流</span>
                  <span>社区服务入口</span>
                </ListWrapper>
              </Col>
              <Col span={6}>
              <ListWrapper>
                  <h3><Icon className="icon" type="weibo"/><Icon className="icon" type="wechat" /></h3>
                  <span className="lastList">条款</span>
                  <span>隐私政策</span>
                  <span>网站地图</span>
                </ListWrapper>
              </Col>
            </Row>
            <Divider/>
            <CopyRightWrapper>
              <Row>
                <Col span={15}>
                <img src={Goalooo} alt=""/>
                <CopyOne>
                  <span>渝ICP备19004915号-1</span>
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50022202000233">
                    <img src={CopyRight} alt=""/>
                    <span> 渝公网安备 50022202000233号</span>
                    </a>&emsp;此网站仅供学习以及参加比赛使用！
                  </CopyOne>
                <CopyTwo>Copyright © Allen 技术支持：黎东珂</CopyTwo>
                </Col>
                <Col span={9} className="Lau">
                <Dropdown overlay={menu} placement="topCenter">
                  <Button>中文(简体)</Button>
                </Dropdown>
                </Col>
              </Row>
            </CopyRightWrapper>
          </FooterWrapper>
      </Fragment>
    );
  }
}

export default Footer;