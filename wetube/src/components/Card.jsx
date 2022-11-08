import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container=styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
`;

const Image=styled.img`
width:100%;
height:202px;
background-color:#999;
`;

const Details=styled.div`
display:flex;
margin-top:16px;
gap:12px;
`;

const Logo=styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
`;

const Title=styled.h1`
font-size:17px;
font-weight:500;
color:${({theme})=>theme.text};
`;

const Channel=styled.h2`
font-size:13.5px;
font-weight:500;
color:${({theme})=>theme.textSoft}; 
margin:7px 0px 5px 0px;
`;

const Texts=styled.div`

`;

const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft}
`;



const Card = () => {
  return (
    <Link to='/video/test' style={{textDecoration:"none"}}>
    <Container><Image/>
    <Details>
     <Logo/>
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

export default Card