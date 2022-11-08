import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

const Container=styled.div`
display:flex;
gap:24px
`;

const Content=styled.div`
flex:5;
`;

const Recomm=styled.div`
flex:2;
`;

const Wrapper=styled.div`
margin-top:10px`;

const Title=styled.h1`
 font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  `;

const Details=styled.div`
display:flex;
align-itmes:center;
justify-content:space-between;
margin-top:18px;
margin:bottom:10px;
`;

const Buttons=styled.div`
display:flex;

gap:20px;
color: ${({ theme }) => theme.text};
`;

const Button=styled.div`
display:flex;
align-itmes:center;
gap:5px;
cursor:pointer;
`;

const Info=styled.span`
  color: ${({ theme }) => theme.textSoft};
  `;

  const Hr=styled.div`
margin:15px 0px;
border:0.5px solid ${({theme})=>theme.soft}
`;

const Channel=styled.div`
display:flex;
justify-content:space-between;
`;

const ChannelInfo=styled.div`
display:flex;
gap:20px;`;

const Subscribe=styled.button`
  background-color: #cc1a00;
  font-weight: 400;
  font-size:16px;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 7px 15px;
  letter-spacing:0.5px;
  cursor: pointer;
`;

const ChannelImg=styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;`;

const ChannelDet=styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};`;

const ChannelName=styled.div`
font-weight:400`;

const Des=styled.div`
font-size:14px`;

const Count=styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;`;

const Video = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
        <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Wrapper>
        <Title>This is my first video</Title>

          <Details>
          <Info>60k views . 1 day ago</Info>
          <Buttons>
          <Button>
              <ThumbUpOutlinedIcon/>
              Like
              </Button>   
              <Button>
                <ThumbDownOffAltOutlinedIcon/>
                  Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon/>
                  Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon/>
                  Save
              </Button>
          </Buttons>
          </Details>
          <Hr/>

          
          <Channel>
            <ChannelInfo>
               <ChannelImg src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
               <ChannelDet>
               <ChannelName>Mohit Rawat</ChannelName>
               <Count>60k subscribers</Count>
               <Des>Lorem dasoisdajsadsbj eewbuds ewudvshds dfoudsnde dfsoudsdf dsuhdsjbkdfsndfsbkjdfs ewfodsfhdsfuhdsj wesushdsd deskjdassdansaduhds adsuhsdbsdan asdbkj</Des>
               </ChannelDet>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe>
          </Channel>


      </Content>
      <Recomm>recommendation</Recomm>
    </Container>
  )
}

export default Video