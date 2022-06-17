import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/MuiTheme';
import UniversityListController from './university/UniversityListController';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UniversityListController />
    </ThemeProvider>
  );
};

export default App;
