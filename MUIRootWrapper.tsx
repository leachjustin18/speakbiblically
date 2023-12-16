import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    // Additional typography customizations can go here
  },
});

export default ({
  children,
}: {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
