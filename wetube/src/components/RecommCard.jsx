import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container=styled.div`
margin-bottom:10px;
cursor:pointer;
display:flex;
gap:10px;
`;

const Image=styled.img`
width:100%;
height:102px;
background-color:#999;
flex:1;
`;

const Details=styled.div`
display:flex;
gap:12px;
flex:1;
`;

const Title=styled.h1`
font-size:16px;
font-weight:400;
color:${({theme})=>theme.text};
`;

const Channel=styled.h2`
font-size:13px;
font-weight:400;
color:${({theme})=>theme.textSoft}; 
margin:7px 0px 5px 0px;
`;

const Texts=styled.div`

`;

const Info=styled.div`
font-size:13px;
color:${({theme})=>theme.textSoft}
`;



const RecommCard = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration:"none"}}>
    <Container type={type}><Image/>
    <Details>
     <Texts>
        <Title>This is my first video</Title>
        <Channel>Mohit Rawat</Channel>
        <Info>60k views . 1 day ago</Info>
     </Texts>
    </Details>
    </Container>
    </Link>
  )
}

export default RecommCard