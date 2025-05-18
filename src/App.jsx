import React from 'react';
import Home from './pages/Home/Home';
import { SnackbarProvider } from 'notistack';

const App = () => (
  <SnackbarProvider>
    <Home />
  </SnackbarProvider>
);

export default App;
