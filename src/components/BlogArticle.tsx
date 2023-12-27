import React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid, Paper, Button, Box } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format, isEqual } from 'date-fns';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from '@emotion/styled';
import { isBrowser } from '../constants/constants';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { TNode } from '../constants/types';
import type { PaperProps } from '@mui/material';

const BlogArticle = ({
  image,
  content,
}: {
  image: IGatsbyImageData;
  content: TNode;
}) => {
  let createdDate = '';
  let updatedDate = '';

  if (isBrowser) {
    createdDate = format(
      new window.Date(content.createdAt),
      'MMMMMMM do, yyyy',
    );
    updatedDate = isEqual(
      new window.Date(format(new window.Date(content.createdAt), 'yyyy-d-MMM')),
      new window.Date(format(new window.Date(content.updatedAt), 'yyyy-d-MMM')),
    )
      ? ''
      : format(new window.Date(content.updatedAt), 'MMMMMMM do, yyyy');
  }

  const Wrapper = styled(Paper)<PaperProps>`
    @media (min-width: 900px) {
      height: 300px;
    }
  `;

  const ImageWrapper = styled(Box)`
    height: 300px;
    @media (min-width: 900px) {
      height: 100%;
    }
  `;

  const GridContent = styled(Grid)`
    padding: 24px;
    @media (min-width: 900px) {
      padding: auto;
    }
  `;

  return (
    <Wrapper sx={{ marginBottom: 2 }} elevation={3} component="article">
      <Grid container height="100%" alignItems="center">
        <Grid item xs={12} md={4} height="100%">
          <ImageWrapper>
            <GatsbyImage
              image={image}
              alt={content.blogImage.title}
              imgStyle={{ height: '100%' }}
              style={{ height: '100%' }}
            />
          </ImageWrapper>
        </Grid>
        <GridContent item xs={12} md={8} px={3}>
          <Typography variant="h4" component="h2" gutterBottom>
            {content.title}
          </Typography>

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

          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {renderRichText(content.description)}
          </Typography>
          <Box mt={3}>
            <Button to={content.gatsbyPath} component={Link} variant="outlined">
              Learn More
            </Button>
          </Box>
        </GridContent>
      </Grid>
    </Wrapper>
  );
};

export default BlogArticle;
