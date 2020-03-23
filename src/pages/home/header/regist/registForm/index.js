import React,{ Component } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
import './registForm.css';

const { Option } = Select;

const residences = [
  {
    value: '中国',
    label: '中国',
    children: [
      {
        value: '重庆',
        label: '重庆',
        children: [
          {
            value: '綦江',
            label: '綦江',
          },
        ],
      },
    ],
  },
  {
    value: '美国',
    label: '美国',
    children: [
      {
        value: '华盛顿哥伦比亚特区',
        label: '华盛顿哥伦比亚特区',
      },
    ],
  },
];

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );


    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="请输入电子邮箱">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '这不是一个有效的电子邮箱！',
              },
              {
                required: true,
                message: '您还没有输入电子邮箱！',
              },
            ],
          })(<Input placeholder="Input Your E-mail"/>)}
        </Form.Item>
        <Form.Item label="请输入密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '您还没有输入密码！',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password placeholder="Input Your Password"/>)}
        </Form.Item>
        <Form.Item label="请再次输入密码" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '您还没有输入密码或两次输入的密码不一致！',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} placeholder="Confirm Your Password"/>)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              请输入用户名&nbsp;
              <Tooltip title="您希望其他人如何称呼您?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '您还没有输入您的用户名！', whitespace: true }],
          })(<Input placeholder="Input Your Nickname"/>)}
        </Form.Item>
        <Form.Item label="请选择所在地" placeholder="Please Choose Your Location">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: '您还没有选择您的居住地！' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item label="请输入手机号码">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '您还没有输入您的手机号码！' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Please enter your mobile phone number"/>)}
        </Form.Item>
        <Form.Item label="验证码" extra="我们必须确认此账户是人类所注册">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '您还没有输入验证码！' }],
              })(<Input placeholder="Please enter the verification code."/>)}
            </Col>
            <Col span={12}>
              <Button>点击获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              我已经仔细阅读<a href="/">《Goalooo社区用户注册协议》</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;