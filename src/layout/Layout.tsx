import React, { PropsWithChildren, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Background from '../components/background/Background';
import Header from '../components/header/Header';

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    font-family: Montserrat, Arial;
    font-size: 0.875rem;
    margin: 0;
  }
  *, *:after, &:before {
    box-sizing: inherit;
  }
  p, h1, h2, h3, h4 {
    margin: 0;
  }
`;

const Container = styled.section`
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 1030px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0 auto;
  }
`;

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <>
    <GlobalStyle />
    <main>
      <Helmet>
        <html lang="en" />
        <title>Speak Biblically</title>
        <meta
          name="description"
          content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=fallback"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      <Container>{children}</Container>

      <Background />
    </main>
  </>
);

export default Layout;
