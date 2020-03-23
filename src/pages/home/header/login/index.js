import React,{ Component,Fragment } from 'react';
import { Drawer,Button } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import WrappedNormalLoginForm from './loginForm';
class LoginDrawer extends Component {

  render() {
    const { loginVisible,loginOnClose } = this.props;
    return (
      <Fragment>
        <Drawer
          title="登陆Goalooo社区"
          placement="right"
          closable={false}
          onClose={loginOnClose}
          visible={loginVisible}
          width={500}
        >
          <WrappedNormalLoginForm/>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={loginOnClose} type="primary">
              取消
            </Button>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

const mapState = (state) =>{
  return {
    loginVisible : state.getIn(['home','loginVisible']),
  }
}
const mapDispath = (dispatch) =>{
  return {
    loginOnClose(){
      dispatch(actionCreators.closeLoginDrawer());
    }
  }
}

export default connect(mapState,mapDispath)(LoginDrawer);