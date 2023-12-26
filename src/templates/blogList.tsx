import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { Container, Stack, Pagination } from '@mui/material';
import { getImage } from 'gatsby-plugin-image';
import BlogArticle from '../components/BlogArticle';
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
  // Fix the Gatsby error for Text content does not match server-rendered HTML
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const { numberOfPages, pageNumber } = pageContext;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    value === 1 ? navigate('/') : navigate(`/${value}`);
  };

  return (
    <>
      {hydrated &&
        data.allContentfulLesson.edges.map((contents) => {
          const content = contents.node;

          const image = getImage(
            content?.blogImage?.gatsbyImageData,
          ) as IGatsbyImageData;

          return (
            <Container key={content.id}>
              <BlogArticle image={image} content={content} />
            </Container>
          );
        })}

      <Stack spacing={2}>
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
