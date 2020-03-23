import React,{Component} from 'react';
import store from './store';
import 'antd/dist/antd.css';
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI' ;

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleDeleteItem={this.handleDeleteItem}
        />
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
    }

    //更新组件数据的方法
    handleStoreChange(){
        this.setState(store.getState());
    }
    //改变输入框数据的方法
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    //提交数据到list方法
    handleButtonClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    //点击删除数据的方法
    handleDeleteItem(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
} 

export default TodoList; 