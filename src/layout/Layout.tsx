import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import type { PropsWithChildren, ReactElement } from 'react';
import type { HeadFC } from 'gatsby';
import Typography from '../components/Typography';

const GlobalStyle = createGlobalStyle`
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

type TitleLinkProps = {
  className?: string;
};

const TitleLink = ({
  children,
  className,
}: PropsWithChildren<TitleLinkProps>): ReactElement => (
  <Link to="/" className={className}>
    {children}
  </Link>
);

const Title = styled(TitleLink)`
  color: #d9a762;
  text-decoration: none;
`;

const HeaderComponent = styled.header`
  background-color: #454040;
  padding-bottom: 1.111rem;
`;

const TitleTypography = styled(Typography)`
  @media (max-width: 37.5rem) {
    font-size: 18vw;
  }
`;

const BackgroundSection = (): string => {
  const isIPadHorizontal = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bible.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `,
  );

  return isIPadHorizontal
    ? data?.desktop?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
    : '';
};

const BackgroundImage = styled.div`
  bottom: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.5;
  background-image: url(${BackgroundSection});
  background-size: cover;
`;

const Layout = ({ children }: PropsWithChildren): ReactElement => (
  <>
    <GlobalStyle />
    <main>
      <HeaderComponent>
        <TitleTypography variant="h1" align="center">
          <Title>Speak Biblically</Title>
        </TitleTypography>
      </HeaderComponent>

      <BackgroundImage />

      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;

export const LayoutHead = ({ children }: PropsWithChildren) => (
  <>
    <html lang="en" />
    <title id="title">Speak Biblically</title>
    <meta
      name="description"
      id="description"
      content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=fallback"
      rel="stylesheet"
    />

    {children}
  </>
);

export const Head: HeadFC = () => <LayoutHead />;
