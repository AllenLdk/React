import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width:1280px;
  margin:0 auto;
  text-align:center;
  padding-bottom:40px;
`;
export const CopyRightWrapper = styled.div`
  img{
    float:left;
    width:100px;
    height:35px;
  }
`;
export const CopyOne = styled.div`
  text-align:left;
  margin-left:120px;
  img{
    width:auto;
    height:auto;
    float:none;
    margin-top:-5px;
  }
  span:first-child{
    margin-right:5px;
    color:rgb(118, 118, 118);
    font-size:14px;
  }
  span:last-child{
    margin:2px;
    color:rgb(118, 118, 118);
    font-size:14px;
  }
`;
export const CopyTwo = styled.div`
  text-align:left;
  margin-left:120px;
`;
export const ListWrapper = styled.div`
  text-align:left;
  h3{
    font-size:14px;
    font-weight:bold;
    .icon{
      font-size:20px;
      margin-right:5px;
      cursor:pointer;
    }
  }
  span{
    display:block;
    line-height:30px;
    cursor:pointer;
    font-family: var(--font-font_family, Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC");
    text-decoration-line: var(--font-link-text-decoration-line, none);
    color: #767676;
    font-weight:600;
    &:hover{
      text-decoration:underline;
    }
  }

`;