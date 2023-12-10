import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layout/Layout';
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
  const { nextPagePath, previousPagePath, numberOfPages, pageNumber } =
    pageContext;

  return (
    <Layout>
      {data.allContentfulLesson.nodes.map((content) => (
        <article key={content.id}>
          {content.createdAt}
          {content.updatedAt}
          {content.title}
          {<>content.description</>}
          {content.gatsbyPath}
        </article>
      ))}
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
    </Layout>
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
      }
    }
  }
`;

export { Head } from '../layout/Layout';
