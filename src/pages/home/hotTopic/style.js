import styled from 'styled-components';

export const HotListWrapper = styled.div`
  padding:10px;
`;
export const HotLine = styled.div`
margin:20px 0;
`;
export const HotNum = styled.span`
padding-top:2px;
display:inline-block;
width:25px;
height:25px;
background:#00b7ee;
color:#fff;
vertical-align: middle;
text-align:center;
`;
export const HotName = styled.span`
padding:0 0 0 20px;
cursor:pointer;
color:#666;
&:hover{
  text-decoration:underline;
}
`;
export const HotClick = styled.span`
color:#666;
float:right;
`;
