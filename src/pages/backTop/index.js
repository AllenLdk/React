import React,{ Component,Fragment } from 'react';
import { BackTop } from 'antd';
import './backtop.css';

class BackToTop extends Component{
  render(){
    return (
      <Fragment>
      <BackTop />
    </Fragment>
    );
  }
}

export default BackToTop;