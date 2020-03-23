import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
height:58px;
border-bottom:1px solid #f0f0f0;
`;

export const HeaderControl = styled.div`
position:relative;
width:1440px;
height:58px;
margin:0 auto;
z-index:1;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
`;
export const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`;
export const NavItem = styled.div`
line-height:56px;
padding:0 10px;
margin:0 10px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
&:hover{
    cursor:pointer; 
}
/*当用户点击时候不选中文本*/
-moz-user-select:none; /*火狐*/
-webkit-user-select:none; /*webkit浏览器*/
-ms-user-select:none; /*IE10*/
user-select:none;
`;
export const SearchWrapper = styled.div`
position:relative;
float:left;
.zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
    }
    &.span{
        &:hover{
            cursor:pointer; 
        }
        /*当用户点击时候不选中文本*/
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
    }
}
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    border-sizing:border-box;
    padding:0 34px 0 20px;
    outline:none;
    border:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:200px;
    }
    &.slide-enter{
        transition:all .3s ease-in-out;
    }
    &.slide-enter-active {
        width:200px;
      }
    &.slide-exit {
        transition:all .3s ease-in-out;
      }
    &.slide-exit-active {
        width:160px;
      }
`;
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background:#fff;
`;
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`;
export const SearchInfoSwitch = styled.a`
float:right;
font-size:13px;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .3s ease-in-out;
    transform-origin:center center;
}
&:hover{
    cursor:pointer; 
}
/*当用户点击时候不选中文本*/
-moz-user-select:none; /*火狐*/
-webkit-user-select:none; /*webkit浏览器*/
-ms-user-select:none; /*IE10*/
user-select:none;
`;
export const SearchInfoList = styled.span`
overflow:hidden;
`;
export const SearchInfoItem  = styled.a`
font-size:12px;
padding:0 5px;
line-height:20px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;
`;
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;
export const Button = styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px #ec6149 solid;
margin-right:20px;
padding:0 20px;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6147;
}
&:hover{
    cursor:pointer; 
}
/*当用户点击时候不选中文本*/
-moz-user-select:none; /*火狐*/
-webkit-user-select:none; /*webkit浏览器*/
-ms-user-select:none; /*IE10*/
user-select:none;
`;