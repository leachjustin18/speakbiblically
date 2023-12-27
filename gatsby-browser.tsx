import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import MUIThemeProvider from './MUIRootWrapper';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import type { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  props,
  element,
}) => {
  const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

  const Main = styled(Box)`
    flex: 1;
  `;

  return (
    <MUIThemeProvider {...props}>
      <Container>
        <Header />
        <Main component="main">{element}</Main>
        <Footer />
      </Container>
    </MUIThemeProvider>
  );
};
