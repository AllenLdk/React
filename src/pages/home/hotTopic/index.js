import React,{ Component,Fragment } from 'react';
import { Card,Icon,Avatar } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import './hotTopic.css';
import { HotListWrapper,HotLine,HotNum,HotName,HotClick,UserWrapper,ShopCard } from './style';
import User from './user';
import Messi from '../../../static/home/messi.jpg';

class HotTopic extends Component{
  render() {
    const { hotList } = this.props;
    const { Meta } = Card;
    console.log(hotList);
    return (
      <Fragment>
        <Card
            cover={
              <img
                alt=""
                src=""
              />
            }
          >
            <User/>
          </Card><br/><br/>
          <Card
          hoverable
          cover={<img className="CardImg" alt="example" src={Messi} />}
          >
          <Meta title="Goalooo社区商城入口" description="选购属于你的正版球衣！" />
          </Card>
      {/* <Card
        style={{ marginTop: 16 }}
        title="Goalooo社区热议榜"
        extra={<a href="#">查看榜单</a>}
      >
        <HotListWrapper>
          {
            hotList.map((item)=>{
              return (
                <HotLine key={item.get('id')}>
                  <HotNum>{item.get('sort')}</HotNum>
                  <HotName>{item.get('hotname')}</HotName>
                  <HotClick>{item.get('click')}</HotClick>
                </HotLine>
              );
            })
          }
        </HotListWrapper>
      </Card> */}
      </Fragment>
    );
  }
  componentWillMount(){
    this.props.getHotDataList();
  }
}

const mapState = (state) =>{
  return {
    hotList:state.getIn(["home","hotList"])
  }
}
const mapDispath = (dispatch) =>{
  return {
    getHotDataList(){
      dispatch(actionCreators.getHotDataList());
    }
  }
}

export default connect(mapState,mapDispath)(HotTopic);