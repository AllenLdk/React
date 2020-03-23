import React , { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { ListWrapper,GLName,GLTitle,GLDetail,ImgWrapper }  from './style';
import './homelist.css';
import { actionCreators } from '../../store';
import Zmage from 'react-zmage';
import { Tag } from 'antd';

class Homelist extends Component{
  render(){
    const { articleList } = this.props;
    return(
      <Fragment>
          {
            articleList.map((item) => {
              return(
                <ListWrapper key={item.get('id')}>
                <GLName>
                  {item.get('glName')}
                </GLName><br/>
                <GLTitle>
                {item.get('glTitle')}
                </GLTitle>
                <Tag 
                color="blue" 
                className="tagCon"
                >{item.get('repeat')}</Tag>
                <GLDetail>
                  <p>
                  {item.get('article')}
                  </p>
                </GLDetail>
                {
                  item.get('imgUrlOne')?
                  <ImgWrapper>
                  <Zmage
                  src={item.get('imgUrlOne')}
                  alt=""
                  set={[{
                    src: `${item.get('imgUrlOne')}`,
                    alt: ""
                  },{
                      src: `${item.get('imgUrlTwo')}`,
                      alt: ""
                  },{
                      src: `${item.get('imgUrlThree')}`,
                      alt: ""
                  }]}
                  />
                  </ImgWrapper>:null
                }
                {
                  item.get('imgUrlTwo')?
                  <ImgWrapper>
                  <Zmage
                  src={item.get('imgUrlTwo')}
                  alt=""
                  set={[{
                    src: `${item.get('imgUrlTwo')}`,
                    alt: ""
                  },{
                      src: `${item.get('imgUrlThree')}`,
                      alt: ""
                  },{
                      src: `${item.get('imgUrlOne')}`,
                      alt: ""
                  }]}
                  />
                </ImgWrapper>:null
                }
                {
                  item.get('imgUrlThree')?
                  <ImgWrapper>
                  <Zmage
                  src={item.get('imgUrlThree')}
                  alt=""
                  set={[{
                    src: `${item.get('imgUrlThree')}`,
                    alt: ""
                  },{
                      src: `${item.get('imgUrlOne')}`,
                      alt: ""
                  },{
                      src: `${item.get('imgUrlTwo')}`,
                      alt: ""
                  }]}
                  />
                </ImgWrapper>:null
                }
                </ListWrapper>
              );
            })
          }
      </Fragment>
    );
  }
  componentWillMount(){
    this.props.getListMessages();
  }
}

const mapState = (state) =>{
  return {
    articleList:state.getIn(['home','articleList'])
  }
}

const mapdispatch = (dispatch) =>{
  return {
    getListMessages(){
      dispatch(actionCreators.getArticleList());
    },
  }
}

export default connect(mapState,mapdispatch)(Homelist);