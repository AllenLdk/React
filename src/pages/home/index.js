import React,{Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Recommend from './recommend';
import { Body } from './style';
import BackToTop from '../backTop';
import Footer from './footer';
import { Row, Col } from 'antd';
// import UserCard from './homeUser';
import HotTopic from './hotTopic';
import './home.css';

class Home extends Component{
    render(){  
        return (
          <Fragment>
            <Row style={{margin:"0 auto",display:"block",width:"1920px"}}><Header/></Row>
            <Body>
                <Row>
                <Col span={13}>
                <Recommend/>
                </Col>
                <Col span={2}></Col>
                <Col span={9}>
                    {/* <UserCard/> */}
                        <HotTopic/>
                </Col>
                </Row>
            </Body>
            <Footer/>
            <BackToTop/>
        </Fragment>
        );
    }
    
}

const mapStateToProps = (state) =>{
    return {
      
    }
}
const mapDispathToProps = (dispatch) =>{
    return {
      
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Home);