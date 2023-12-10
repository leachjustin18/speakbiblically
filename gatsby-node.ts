import path from 'path';
import { paginate } from 'gatsby-awesome-pagination';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      allContentfulLesson(sort: { createdAt: DESC }) {
        totalCount
        nodes {
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
  `);

  //@ts-ignore
  const blogPosts = query?.data?.allContentfulLesson?.nodes;

  paginate({
    createPage,
    items: blogPosts,
    itemsPerPage: 4,
    pathPrefix: '/',
    component: path.resolve('./src/templates/blogList.tsx'),
  });
};
