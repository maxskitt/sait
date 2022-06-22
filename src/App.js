import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/Artist';
import Music from './pages/Music';
import ArtistBio from './pages/ArtistBio';
import Afisha from './pages/Afisha';
import Header from './component/header';
import Footer from './component/footer';
import News from './pages/News';


function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="artists/:id" element={<ArtistBio />} />
        <Route path="afisha" element={<Afisha />} />
        <Route path="news" element={<News />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
