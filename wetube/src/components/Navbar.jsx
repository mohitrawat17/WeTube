import React from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from 'styled-components'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import wetube from '../images/wetube.png'
  
const Container=styled.div`
position:sticky;
background-color:${({theme})=>theme.bgLighter};
padding:0px 10px;
`;

const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:50px;
position:relative;
padding:6px 0px;
margin-right:10px;
`;

const Input=styled.input`
border: none;
background:transparent;
outline: none;
  color: ${({ theme }) => theme.text};
`;

const Search=styled.div`
width:40%;
position:absolute;
left:0px;
right:0px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border-radius: 3px;
border: 1px solid #ccc; 
color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff; 
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LogoCon=styled.div`
  color: ${({ theme }) => theme.text};
`;

const Logo=styled.div`
display:flex;
align-items:center;
gap:5px;
`;

const Img=styled.img`
height:25px;
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <LogoCon>
      <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
            <Logo>
                <Img src={wetube}/>
                    WeTube
            </Logo>
            </Link> 
            </LogoCon>
        <Search>
           <Input placeholder='Search' />
           <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}>
        <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
            </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar