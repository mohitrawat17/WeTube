import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css'
import { darkTheme, lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './components/Video';
import Home from './components/Home';
import SignIn from './components/SignIn'

const Container=styled.div`
`;

const Main=styled.div`
display: flex;
background-color:${({theme})=>theme.bg};
`;

const Wrapper=styled.div`
padding:22px 96px;
`;






const App = () => {
    const[darkMode,setDarkMode]=useState(true);
  return (
<ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
    <BrowserRouter>
       
        <Navbar/>
        <Main>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

            <Wrapper>
                <Routes>
                  <Route path='/'>
                  <Route path='signin' element={<SignIn/>}/>
                         <Route index element={<Home/>}/>
                         <Route path='video'>
                            <Route path=':id' element={<Video/>}/>
                         </Route>
                   </Route>
                </Routes>
            </Wrapper>
        </Main>
        </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App