import React from 'react';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { AppBar, Typography, Toolbar } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { ReactElement } from 'react';

const Header = () => {
  const TitleLink = ({ className }: { className?: string }): ReactElement => (
    <Link to="/" className={className}>
      Speak Biblically
    </Link>
  );

  const Title = styled(TitleLink)`
    color: #d9a762;
    text-decoration: none;
    @media (max-width: 37.5rem) {
      font-size: 18vw;
    }
  `;

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />

      <AppBar
        position="static"
        sx={{
          backgroundColor: grey[900],
        }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ flexGrow: 1, lineHeight: 1 }}
            marginBottom="1.111rem"
            fontWeight={500}
          >
            <Title />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
