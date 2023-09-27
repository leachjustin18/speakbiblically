import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';
import Article from '../components/Article';
import type { TLessons } from '../constants/types';

const IndexPage = ({ data }: { data: TLessons }) => (
  <Layout>
    {data.allContentfulLesson.nodes.map((content) => (
      <article key={content.id}>
        <Article
          createdAt={content.createdAt}
          updatedAt={content.updatedAt}
          title={content.title}
          description={content.description}
          gatsbyPath={content.gatsbyPath}
        />
      </article>
    ))}
  </Layout>
);

export default IndexPage;

export const pageQurey = graphql`
  query homePage {
    allContentfulLesson(sort: { createdAt: DESC }) {
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
