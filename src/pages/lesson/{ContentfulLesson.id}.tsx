import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
  Box,
  Container,
  Fade,
  Tooltip,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  Breadcrumbs,
  Link as MUILink,
} from '@mui/material';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { format, isEqual } from 'date-fns';
import { grey } from '@mui/material/colors';
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  XIcon,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import LinkIcon from '@mui/icons-material/Link';
import YouTube from 'react-youtube';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { useMediaQuery } from 'react-responsive';
import { isBrowser } from '../../constants/constants';
import { HTMLHead } from '../../components/HTMLHead';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { HeadFC } from 'gatsby';
import type { TLesson } from '../../constants/types';

const Lesson = ({
  data: {
    contentfulLesson: {
      title,
      blogImage,
      createdAt,
      updatedAt,
      youTubeId,
      description,
      relatedArticles,
    },
  },
}: {
  data: TLesson;
}) => {
  const [checked, setChecked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const Title = styled(Typography)`
    font-size: 28px;
    @media (max-width: 37.5rem) {
      font-size: 9vw;
    }
  `;

  const ImageWrapper = styled(Box)`
    height: 300px;
  `;

  const CopyToClipboardIconButton = styled(IconButton)`
    height: 28px;
    width: 28px;
    background-color: ${grey[300]};
    color: #000;
    &:hover {
      background-color: ${grey[300]};
    }
  `;

  const Description = styled<any>(Typography)`
    white-space: pre-wrap;
    line-height: 1.5;

    @media (max-width: 37.5rem) {
      font-size: 4vw;
    }
  `;

  const RelatedArticles = styled<any>(Typography)`
    li {
      padding-bottom: 1rem;
    }

    a {
      color: ${grey[900]};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `;

  const image = getImage(blogImage.gatsbyImageData) as IGatsbyImageData;

  let createdDate = '';
  let updatedDate = '';
  let shareUrl = '';

  if (isBrowser) {
    createdDate = format(new window.Date(createdAt), 'MMMMMMM do, yyyy');
    updatedDate = isEqual(
      new window.Date(format(new window.Date(createdAt), 'yyyy-d-MMM')),
      new window.Date(format(new window.Date(updatedAt), 'yyyy-d-MMM')),
    )
      ? ''
      : format(new window.Date(updatedAt), 'MMMMMMM do, yyyy');

    shareUrl = window.location.href;
  }

  const iconSize = 28;
  //@ts-ignore
  const shareImage = image.images.fallback.src;

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SocialShare = () => (
    <Fade in={checked}>
      <Stack direction="row" spacing={1} mt="8px" justifyContent="flex-end">
        <Tooltip title="Share on Pinterest">
          <PinterestShareButton url={shareUrl} media={shareImage}>
            <PinterestIcon size={iconSize} round />
          </PinterestShareButton>
        </Tooltip>

        <Tooltip title="Share on Facebook">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
        </Tooltip>

        <Tooltip title="Share on X (Twitter)">
          <Box>
            <TwitterShareButton url={shareUrl} title={title}>
              <XIcon size={iconSize} round />
            </TwitterShareButton>
          </Box>
        </Tooltip>

        <Tooltip title="Share on Reddit">
          <Box>
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={iconSize} round />
            </RedditShareButton>
          </Box>
        </Tooltip>

        <Tooltip title="Send as an email">
          <Box>
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="Check out this Speak Biblically lesson!"
            >
              <EmailIcon size={iconSize} round />
            </EmailShareButton>
          </Box>
        </Tooltip>
        <Tooltip title="Copy to clipboard">
          <CopyToClipboardIconButton onClick={handleCopyToClipboard}>
            <LinkIcon fontSize="small" />
          </CopyToClipboardIconButton>
        </Tooltip>
      </Stack>
    </Fade>
  );

  const isSocialDesktop = useMediaQuery({
    query: '(min-width: 900px)',
  });

  return (
    <>
      {hydrated && (
        <Container maxWidth="md">
          <Title variant="h2" gutterBottom>
            {title}
          </Title>
          <ImageWrapper>
            <GatsbyImage
              image={image}
              alt={blogImage.title}
              imgStyle={{ height: '100%' }}
              style={{ height: '100%' }}
            />
          </ImageWrapper>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="-"
            sx={{ marginTop: '8px' }}
          >
            <MUILink
              underline="hover"
              color="inherit"
              component={Link}
              to="/"
              variant="caption"
            >
              Home
            </MUILink>

            <Typography color="text.primary" variant="caption">
              {title}
            </Typography>
          </Breadcrumbs>

          <Grid
            container
            mt={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={12} md={6} lg={6}>
              <Typography variant="caption">
                <strong>Published on: </strong>
                {createdDate}
              </Typography>

              {updatedDate ? (
                <>
                  {' '}
                  <Typography variant="caption">
                    <strong>Updated on:</strong> {updatedDate}
                  </Typography>
                </>
              ) : null}
            </Grid>

            <Grid item textAlign="right" sm={12} md={6} lg={6}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ md: 'end' }}
                alignItems="center"
                mt={{ xs: '8px', sm: '8px', md: 0 }}
                useFlexGap
                flexWrap="wrap"
              >
                {isSocialDesktop ? <SocialShare /> : null}

                <Button variant="outlined" onClick={handleChange}>
                  Share
                </Button>

                {!isSocialDesktop ? <SocialShare /> : null}
              </Stack>
            </Grid>
          </Grid>

          <Box mt={1}>
            <YouTube videoId={youTubeId} opts={{ width: '100%' }} />
          </Box>

          <Description fontSize="1.14rem" gutterBottom component="div" mt={1}>
            {renderRichText(description)}
          </Description>

          {relatedArticles ? (
            <>
              <Typography
                variant="h3"
                fontSize="1.6rem"
                gutterBottom
                display="block"
                mt={3}
              >
                Related articles
              </Typography>
              <RelatedArticles component="div">
                {renderRichText(relatedArticles)}
              </RelatedArticles>
            </>
          ) : null}

          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Successfully copied to the clipboard!
            </Alert>
          </Snackbar>
        </Container>
      )}
    </>
  );
};

export default Lesson;

export const pageQuery = graphql`
  query ($id: String!) {
    contentfulLesson(id: { eq: $id }) {
      title
      description {
        raw
      }
      createdAt
      updatedAt
      youTubeId
      relatedArticles {
        raw
      }
      blogImage {
        title
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  const dataTyped = data as TLesson;

  return (
    <HTMLHead>
      <title id="title">{dataTyped.contentfulLesson.title}</title>
    </HTMLHead>
  );
};
