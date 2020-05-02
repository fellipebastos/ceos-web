import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import { AuthProvider } from './auth';

export default function AppProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
