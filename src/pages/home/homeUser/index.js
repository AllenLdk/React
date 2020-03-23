import React ,{ Component,Fragment } from 'react';
import { Card, Icon, Avatar } from 'antd';
import { UserMessage,Username } from './style';


class UserCard extends Component{
  render(){
    return (
      <Fragment>
        <Card
          style={{ width: 350 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
         <Avatar shape="square" size={80} icon="user"  className="userImg"/>
         <UserMessage>
         <p className="usernames">
          <Icon type="sketch"/>
          <Username>
            Allen
          </Username>
         </p>
         </UserMessage>
      </Card>
      </Fragment>
    );
  }
}

export default  UserCard;