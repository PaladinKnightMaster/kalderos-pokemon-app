import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PokemonDetail from './pages/PokemonDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, CssBaseline } from '@mui/material';

const App = () => (
  <>
    <CssBaseline />
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, p: 3, mt: '64px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pokemon/:number" element={<PokemonDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  </>
);

export default App;
