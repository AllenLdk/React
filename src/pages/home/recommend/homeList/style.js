import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding-bottom:20px;
  border-bottom:1px solid #f8f8f8;
  img{
    width:auto;
    height:auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const GLName = styled.span`
  width:100%;
  font-size:20px;
  cursor:pointer;
  &:hover{
    text-decoration:underline;
  }
`;
export const GLTitle = styled.span`
  display:inline-block;
  font-size:16px;
  padding:10px 0;
  cursor:pointer;
  color:#005097;
  &:hover{
    text-decoration:underline;
  }
`;
export const GLDetail = styled.div`
  p{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    overflow: hidden;
  }
`;
export const ImgWrapper = styled.div`
  display:inline-block;
  width:200px;
  height:147px;
  margin-left:20px;
`;