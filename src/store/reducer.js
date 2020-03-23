import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';

const defalueState = {
    inputValue:'',
    list:[]
}

//reducer可以接收state，但是绝对不能修改state
//纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state = defalueState,action) =>{
    //双向数据绑定
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    //增加列表数据
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    //删除列表数据
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    //服务数据
    if(action.type===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    console.log(state,action);
    return state;
}