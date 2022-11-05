import React, { useState } from 'react'
import './App.css';
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
const clientSideEmotionCache = createCache({ key: 'css' });

 function App({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {
  return (
    <CacheProvider value={emotionCache} >
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Home />} />
            <Route path='/posts/search' element={<Home />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            <Route path='/auth' element={<Auth />} />

          </Routes>
      </BrowserRouter>
      </Container>
    </CacheProvider>
     
  );
}

export default App;
