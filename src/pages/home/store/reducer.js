import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused:false,
    loginVisible:false,
    registVisible:false,
     login:true,
    bannerList:[],
    articleList:[],
    hotList:[]
});


export default (state = defaultState,action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
        return state.set('focused',true);
        case constants.SEARCH_BLUR:
        return state.set('focused',false);
        case constants.CHANGE_REGIST_VISIBLE:
        return state.set('registVisible',true);
        case constants.CLOSE_REGIST_VISIBLE:
        return state.set('registVisible',false);
        case constants.CHANGE_LOGIN_VISIBLE:
        return state.set('loginVisible',true);
        case constants.CLOSE_LOGIN_VISIBLE:
        return state.set('loginVisible',false);
        case constants.CHANGE_BANNER_MESSAGE:
        return state.set('bannerList',fromJS(action.bannerList));
        case constants.CHANGE_ARTICLE_LIST:
        return state.set('articleList',fromJS(action.articleList));
        case constants.CHANGE_HOT_LIST:
        return state.set('hotList',fromJS(action.hotList));
        case constants.CHANGE_LOGIN:
        return state.set('login',action.value);
        // case constants.LOGIN_OUT:
        // return state.set('login',action.value);
        default:return state;
    }  
}