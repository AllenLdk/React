import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`;
export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
    width:625px;
    height:270px;
}
`;
export const HomeRight = styled.div`
width:280px;
float:right;
`;

export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;

// 这是Topic组件中的样式
export const TopicItem = styled.div`
height:32px;
line-height:32px;
font-size:14px;
margin-left:18px;
color:#dcdcdc;
float:left;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
padding-right:10px;
margin-bottom:18px;
.topic-pic{
    float:left;
    dislay:block;
    width:32px;
    height:32px;
    margin-right:10px;
}
`;

//这是List组件中的样式
export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right
    border-radius:10px;
}
`;

export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999;
}
`;


export const LoadMore = styled.div`
margin:30px 0;
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
cursor:pointer;
`;

//这是Recommend组件中的样式
export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;
`;

export const RecommendItem = styled.div`
width:280px;
height:50px;
background:url(${(props) => props.imgUrl});
background-size:contain;
`;

//这是Writer组件的内容

export const WriterWrapper = styled.div`
width:278px;
height:50px;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
border:1px solid #ccc;
`;

//这是返回顶部的内容
export const BackTop = styled.div`
position:fixed;
text-align:center;
border:1px solid #ccc;
right:100px;
bottom:50px;
font-size:12px;
cursor:pointer;
padding:5px 10px;
`;