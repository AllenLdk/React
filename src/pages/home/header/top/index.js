import React,{Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { TopWrapper,Logo,Nav,NavItem } from './style';
import { CSSTransition } from 'react-transition-group';
import { Input,Icon } from 'antd';
import { actionCreators } from '../../store';
import './style.css';
import RegistDrawer from '../regist';
import LoginDrawer from '../login';

class Top extends Component{
    render(){  
      const {handleFocus,focused,handleBlur,showRegistDrawer,showLoginDrawer} = this.props;
        return (
          <Fragment>
            <TopWrapper>
                <Logo />
                <CSSTransition
                  in={focused}
                  timeout={200}
                  classNames="slide"
                >
                <Input
                placeholder="搜“巴塞罗那”试试"
                className={focused ? 'focused' : ''}
                onFocus={handleFocus}
                onBlur={handleBlur}
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />}
                />
                </CSSTransition>
                <Nav>
                  <NavItem>手机端</NavItem>
                  <NavItem>帮助</NavItem>
                  <NavItem>故事</NavItem>
                  <NavItem onClick={showLoginDrawer}>登陆</NavItem>
                  <NavItem onClick={showRegistDrawer}>注册</NavItem>
                  <RegistDrawer/>
                  <LoginDrawer/>
                </Nav>
            </TopWrapper>
          </Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
      focused : state.getIn(['home','focused']),
    }
}
const mapDispathToProps = (dispatch) =>{
    return {
      handleFocus(){
        dispatch(actionCreators.searchFocus());
      },
      handleBlur(){
        dispatch(actionCreators.searchBlur());
      },
      showRegistDrawer(){
        dispatch(actionCreators.showRegistDrawer());
      },
      showLoginDrawer(){
        dispatch(actionCreators.showLoginDrawer());
      }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Top);