import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../../../store';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './loginForm.css';

class NormalLoginForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.username = values.username;
        this.props.password = values.password;
      }
    });
  };
  render() {
    const { showRegistDrawer,loginstate,login } = this.props;
    const { getFieldDecorator } = this.props.form;
    if(loginstate){
      return <Redirect to='/'/>
    }else{
        return (
          <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                ref={(input) => {this.account = input}}
              />,
            )}
          </Form.Item>
          <Form.Item className="loginPassword">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                ref={(input) => {this.password = input}}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="/">
              忘记密码?
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button"
            onClick={() => login(this.account,this.password)}
            >
              登陆
            </Button>
            或者 <a href="javascript:;" onClick={showRegistDrawer}>现在注册！</a>
          </Form.Item>
        </Form>
        );
      }
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapState = (state) =>{
  return {
    loginstate:state.getIn(['home','login'])
  }
}
const mapDispath = (dispatch) =>{
  return {
    showRegistDrawer(){
      dispatch(actionCreators.showRegistDrawer());
    },
    login(account,password){
      dispatch(actionCreators.login(account, password))
    }
  }
}


export default connect(mapState,mapDispath)(WrappedNormalLoginForm);