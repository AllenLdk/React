import React,{Component, Fragment} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './header.css';
import Top from './top';
import { Message } from './style';
import { actionCreators } from '../store';

class Header extends Component{
    render(){  
      const { bannerList } = this.props;
        return (
          <Fragment>
            <Top className="topStyle"/>
              <Carousel className="carousel" effect="fade" autoplay>
                {
                  bannerList.map((item) => {
                    return(
                      <div key={item.get('id')}>
                      <img src={item.get('imgUrl')} alt=''/>
                      <Message>
                        <h1>{item.get('titleOne')}<br/>
                        {item.get('titleTwo')}</h1>
                        <p>{item.get('desc')}</p>
                      </Message>
                      </div>
                    );
                  })
                }
            </Carousel>
        </Fragment>
        );
    }
    componentWillMount(){
      this.props.getBannerMessage();
    }
}

const mapState = (state) =>{
    return {
      bannerList:state.getIn(['home','bannerList'])
    }
}
const mapDispatch = (dispatch) =>{
    return {
      getBannerMessage(){
        dispatch(actionCreators.getMessage());
      }
    }
}
export default connect(mapState,mapDispatch)(Header);