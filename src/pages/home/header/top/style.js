import styled from 'styled-components';
import logoPic from '../../../../static/header/Goalooo.png';

export const TopWrapper = styled.div`
min-width:1280px;
width:100%;
height:70px;
position:absolute;
z-index:1;
`;

export const Logo = styled.a.attrs({
  href:'/'
})`
position:absolute;
top:10px;
left:30px;
display:block;
width:130px;
height:66px;
background:url(${logoPic}) no-repeat;
background-size:contain;
`;
export const Nav = styled.div`
text-align:right;
position:absolute;
right:40px;
top:5px;
`;
export const NavItem = styled.div`
line-height:56px;
padding:0 10px;
margin:0 10px;
font-size:15px;
float:left;
color:#f8f8ff;
&:hover{
  cursor:pointer;
  border-bottom:2px solid #f8f8ff;
}
/*当用户点击时候不选中文本*/
-moz-user-select:none; /*火狐*/
-webkit-user-select:none; /*webkit浏览器*/
-ms-user-select:none; /*IE10*/
user-select:none;
`;