import React,{ Component,Fragment } from 'react';
import { Drawer,Button } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import WrappedRegistrationForm from './registForm';


class RegistDrawer extends Component {

  render() {
    const { registVisible,registOnClose } = this.props;
    return (
      <Fragment>
        <Drawer
          title="注册新用户"
          placement="right"
          closable={false}
          onClose={registOnClose}
          visible={registVisible}
          placement={"left"}
          width={650}
        >
          <WrappedRegistrationForm/>
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
            <Button onClick={registOnClose} type="primary">
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
    registVisible : state.getIn(['home','registVisible']),
  }
}
const mapDispath = (dispatch) =>{
  return {
    registOnClose(){
      dispatch(actionCreators.closeRegistDrawer());
    }
  }
}

export default connect(mapState,mapDispath)(RegistDrawer);