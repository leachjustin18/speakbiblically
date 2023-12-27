import React from 'react';
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import { Box, Button, Stack } from '@mui/material';
import {
  AccountTree,
  Facebook,
  RssFeed,
  Twitter,
  Pinterest,
  Instagram,
  YouTube,
} from '@mui/icons-material';

const Footer = () => {
  const FooterButton = styled(Button)<any>`
    color: #d9a762;
    &:hover {
      color: #f2d2b7;
    }
  `;

  return (
    <Box component="footer" sx={{ backgroundColor: grey[900] }} py={3}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        textAlign="center"
      >
        <Box>
          <FooterButton
            href="https://www.youtube.com/playlist?list=PLxT7fstilLQ6sV3ESqzEtbwx6J-LuudZN"
            target="blank"
            rel="nofollow"
            startIcon={<YouTube />}
          >
            YouTube
          </FooterButton>
        </Box>
        <Box>
          <FooterButton
            href="https://www.facebook.com/39thStreetChurchofChrist"
            target="blank"
            rel="nofollow"
            startIcon={<Facebook />}
          >
            Facebook
          </FooterButton>
        </Box>

        <Box>
          <FooterButton
            href="https://www.instagram.com/39thstreetcofc/"
            target="blank"
            rel="nofollow"
            startIcon={<Instagram />}
          >
            Instagram
          </FooterButton>
        </Box>

        <Box>
          <FooterButton
            href="https://www.pinterest.com/39cofc/"
            target="blank"
            rel="nofollow"
            startIcon={<Pinterest />}
          >
            Pinterest
          </FooterButton>
        </Box>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        mt="8px"
        textAlign="center"
      >
        <Box>
          <FooterButton
            href="https://twitter.com/39COFC"
            target="blank"
            rel="nofollow"
            startIcon={<Twitter />}
          >
            Twitter (X)
          </FooterButton>
        </Box>

        <Box>
          <FooterButton
            href="/rss.xml"
            target="blank"
            rel="nofollow"
            startIcon={<RssFeed />}
          >
            RSS Feed
          </FooterButton>
        </Box>
        <Box>
          <FooterButton
            href="/sitemap-0.xml"
            target="blank"
            rel="nofollow"
            startIcon={<AccountTree />}
          >
            Sitemap
          </FooterButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
