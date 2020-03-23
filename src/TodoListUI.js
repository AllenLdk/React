import React from 'react';
import { Input,List,Button } from 'antd';

//无状态组件（当一个组件内部只有render函数的时候，可以用无组件函数来进行替代，性能会更加优化）
const TodoListUI = (props) => {
    return (
        <div style={{margin:'200px 700px'}}>
                <div style={{marginBottom:'10px'}}>
                    <Input
                     value={props.inputValue}
                      placeholder="请输入信息"
                      style={{width:'400px',marginRight:'10px'}}
                      onChange={props.handleInputChange}
                      />
                    <Button onClick={props.handleButtonClick} type="primary">提交</Button>
                </div>  
                <List
                    style={{marginTop:'0 auto',width:'400px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                    <List.Item onClick={() => {props.handleDeleteItem(index)}}>
                    {item}
                    </List.Item>
                    )}
                />
            </div>
    )
}
//UI组件
// class TodoListUI extends Component{
//     render(){
//         return(
//             <div style={{margin:'200px 700px'}}>
//                 <div style={{marginBottom:'10px'}}>
//                     <Input
//                      value={this.props.inputValue}
//                       placeholder="请输入信息"
//                       style={{width:'400px',marginRight:'10px'}}
//                       onChange={this.props.handleInputChange}
//                       />
//                     <Button onClick={this.props.handleButtonClick} type="primary">提交</Button>
//                 </div>  
//                 <List
//                     style={{marginTop:'0 auto',width:'400px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (
//                     <List.Item onClick={(index) => {this.props.handleDeleteItem(index)}}>
//                     {item}
//                     </List.Item>
//                     )}
//                 />
//             </div>
//         );
//     }
// }

export default TodoListUI;