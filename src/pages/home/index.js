import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import bannerJPG from  '../../statics/Home/banner.jpg';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                     className="banner-img"
                     src={ bannerJPG }
                     alt=""
                     />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回<br/>顶部</BackTop> : null}
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.props.changeHomeDate();
        this.bindEvents();
    }
    componentWillMount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispath = (dispatch) => {
    return {
        changeHomeDate(){
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow(e){
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}
export default connect(mapState,mapDispath)(Home);