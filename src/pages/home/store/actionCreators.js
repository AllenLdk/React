import * as constants from './constants'
import axios from 'axios';

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});

// 获取轮播图信息
export const getMessage = () =>{
    return (dispatch) =>{
        axios.get('/api/indexBanner.json').then((res) => {
            let result = res.data.data;
            dispatch(changeBannerMessage(result));
        }).catch(()=>{
            console.log('获取轮播图信息出错啦！！！');
        });
    }
}

const changeBannerMessage = (result) => ({
    type:constants.CHANGE_BANNER_MESSAGE,
    bannerList:result.BannerList,
});

// 获取首页文章列表信息
export const getArticleList = () =>{
    return (dispatch) =>{
        axios.get('/api/indexList.json').then((res) => {
            let result = res.data.data;
            dispatch(changeArticleList(result));
        }).catch(() => {
            console.log('获取文章列表信息出错啦！！！');
        });
    }
}

const changeArticleList = (result) => ({
    type:constants.CHANGE_ARTICLE_LIST,
    articleList:result.ArticleList,
});


//注册抽屉弹出
export const showRegistDrawer = () =>({
    type:constants.CHANGE_REGIST_VISIBLE
});

//注册抽屉关闭
export const closeRegistDrawer = () =>({
    type:constants.CLOSE_REGIST_VISIBLE
});

//登录抽屉弹出
export const showLoginDrawer = () =>({
    type:constants.CHANGE_LOGIN_VISIBLE
});

//登录抽屉关闭
export const closeLoginDrawer = () =>({
    type:constants.CLOSE_LOGIN_VISIBLE
});

//获取首页热搜信息
export const getHotDataList  = () =>{
    return (dispatch) =>{
        axios.get('/api/indexHotData.json').then((res) => {
            let result = res.data.data;
            dispatch(changeHotList(result));
        }).catch(() => {
            console.log('获取热议信息出错啦！！！');
        });
    }
}

const changeHotList = (result) =>({
    type:constants.CHANGE_HOT_LIST,
    hotList:result.hotData,
});

//用户登录
export const login = (account,password) => {
    return (dispatch) => {
        console.log(account,password)
        // axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
        //     const result = res.data;
        //     console.log(result);
        //     if(result){
        //         dispatch(changeLogin());
        //     }else{
        //         alert("登录失败！");
        //     }
        // })
    }
}

export const changeLogin = () => ({
    type:constants.CHANGE_LOGIN,
    value:true
});

export const logout = () => ({
    type:constants.LOGIN_OUT,
    value:false
});