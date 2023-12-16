import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Typography } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { TLessons } from '../constants/types';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

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
  const { nextPagePath, previousPagePath, numberOfPages, pageNumber } =
    pageContext;

  return (
    <>
      {data.allContentfulLesson.nodes.map((content) => {
        let imageData = null;

        const image = getImage(
          content?.blogImage?.gatsbyImageData,
        ) as IGatsbyImageData;

        return (
          <Container key={content.id}>
            <Typography>{content.createdAt}</Typography>
            {content.updatedAt}
            <GatsbyImage image={image} alt={content?.blogImage?.title} />
            {content.title}
            {<>content.description</>}
            {content.gatsbyPath}
          </Container>
        );
      })}
      {previousPagePath ? (
        <Link to={previousPagePath} rel="prev">
          ← Previous Page
        </Link>
      ) : null}
      {nextPagePath ? (
        <Link to={nextPagePath} rel="next">
          Next Page →
        </Link>
      ) : null}
      {Array.from({ length: numberOfPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link to={`/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
        </li>
      ))}
    </>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulLesson(sort: { createdAt: DESC }, skip: $skip, limit: $limit) {
      nodes {
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
`;

export { Head } from '../layout/Layout';
