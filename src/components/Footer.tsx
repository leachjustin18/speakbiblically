import React, { ComponentClass } from 'react';
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
  X,
} from '@mui/icons-material';

const Footer = () => {
  const FooterButton: ComponentClass<any> = styled(Button)`
    color: #d9a762;
    &:hover {
      color: #f2d2b7;
      svg {
        fill: #f2d2b7;
      }
    }
  `;

  const TikTokIcon: ComponentClass<any> = ({
    className,
  }: {
    className?: string;
  }) => (
    <svg viewBox="0 0 50 50" width="15px" height="15px" className={className}>
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );

  const TikTokIconStyled: ComponentClass<any> = styled(TikTokIcon)`
    fill: #d9a762;
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
            href="https://www.tiktok.com/@39thstreetcofc"
            target="blank"
            rel="nofollow"
            startIcon={<TikTokIconStyled />}
          >
            TikTok
          </FooterButton>
        </Box>

        <Box>
          <FooterButton
            href="https://x.com/39streetcofc"
            target="blank"
            rel="nofollow"
            startIcon={<X />}
          >
            X
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
