import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureDetails from './components/FeatureDetails';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d9996c',
    },
    background: {
      default: '#fffdd054',
      paper: '#8a8984',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Benefits />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/feature/:title" element={<FeatureDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;