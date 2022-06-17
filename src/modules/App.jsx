import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/MuiTheme';
import UniversityList from './university/UniversityList';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UniversityList />
    </ThemeProvider>
  );
};

export default App;
