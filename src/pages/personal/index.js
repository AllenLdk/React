import React,{ Component, Fragment } from 'react';
import BackToTop from '../backTop';
import { PersonalCenter } from './style';
import SiderDemo from './SliderDemo';
import './personal.css';


class Personal extends Component{
  render(){
    return (
      <Fragment>
        <div>
          <PersonalCenter style={{marginTop:50}}>
            <SiderDemo/>
          </PersonalCenter>
        </div>
        <BackToTop/>
      </Fragment>
      
    );
  }
}

export default Personal;
