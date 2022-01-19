import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, indigo, red } from '@mui/material/colors';
import MainLayout from 'layouts/MainLayout';

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: indigo,
    secondary: green,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={createTheme(themeConfig)}>
      <CssBaseline />
      <div style={{ height: '100vh' }}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <MainLayout>
                  <h1>Home</h1>
                </MainLayout>
              }
            />
            <Route
              path='*'
              element={
                <MainLayout>
                  <h1>Test</h1>
                </MainLayout>
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
