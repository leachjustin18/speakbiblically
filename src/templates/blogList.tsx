import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Pagination,
} from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { format } from 'date-fns';
import { isBrowser } from '../constants/constants';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { TLessons } from '../constants/types';

const BlogList = ({
  pageContext,
  data,
}: {
  pageContext: {
    nextPagePath?: string;
    previousPagePath?: string;
    numberOfPages: number;
    pageNumber?: number;
  };
  data: TLessons;
}) => {
  const { numberOfPages, pageNumber } = pageContext;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log('🚀 ~ file: blogList.tsx:27 ~ handleChange ~ value:', value);

    value === 1 ? navigate('/') : navigate(`/${value}`);
  };

  // let createdDate = '';
  // let updatedDate = '';

  // if (isBrowser) {
  //   createdDate =
  //   updatedDate = isEqual(
  //     new window.Date(format(new window.Date(createdAt), 'yyyy-d-MMM')),
  //     new window.Date(format(new window.Date(updatedAt), 'yyyy-d-MMM')),
  //   )
  //     ? ''
  //     : format(new window.Date(updatedAt), 'MMMMMMM do, yyyy');
  // }

  return (
    <>
      {data.allContentfulLesson.edges.map((contents) => {
        const content = contents.node;

        const image = getImage(
          content?.blogImage?.gatsbyImageData,
        ) as IGatsbyImageData;

        return (
          <Container key={content.id}>
            <Paper sx={{ marginBottom: 2, height: '300px' }}>
              <Grid container height="100%">
                <Grid item xs={4} height="100%">
                  <GatsbyImage
                    image={image}
                    alt={content?.blogImage?.title}
                    imgStyle={{ height: '100%' }}
                    style={{ height: '100%' }}
                  />
                </Grid>
                <Grid item xs={8} px={3}>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight={500}
                    gutterBottom
                  >
                    {content.title}
                  </Typography>

                  <Typography variant="caption">
                    <strong>Created at: </strong>
                    {isBrowser
                      ? format(
                          new window.Date(content.createdAt),
                          'MMMMMMM do, yyyy',
                        )
                      : null}{' '}
                  </Typography>

                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {renderRichText(content.description)}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        );
      })}

      <Stack spacing={2}>
        <Typography>
          Page: {pageNumber || pageNumber === 0 ? pageNumber + 1 : 0}
        </Typography>
        <Pagination
          count={numberOfPages}
          page={pageNumber || pageNumber === 0 ? pageNumber + 1 : 0}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulLesson(sort: { createdAt: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          gatsbyPath(filePath: "/lesson/{ContentfulLesson.id}")
          createdAt
          updatedAt
          id
          description {
            raw
          }
          title
          blogImage {
            title
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export { Head } from '../layout/Layout';
