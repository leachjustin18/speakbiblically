import path from 'path';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { GatsbyConfig } from 'gatsby';

type TNode = {
  gatsbyPath: string;
  updatedAt: Date;
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://www.speakbiblically.com';

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: 'Speak Biblically',
    siteUrl,
    description:
      'Devoted wholly focused on the teaching, devout observance, and unwavering compliance with the Word of God.',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({
              query: { site, allContentfulLesson },
            }: {
              query: {
                site: { siteMetadata: { siteUrl: string } };
                allContentfulLesson: {
                  nodes: {
                    frontmatter: Record<any, any>;
                    title: string;
                    createdAt: Date;
                    gatsbyPath: string;
                    description: { raw: string };
                    updatedAt: Date;
                  }[];
                };
              };
            }) => {
              return allContentfulLesson.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  title: node.title,
                  date: node.createdAt,
                  url: `${site.siteMetadata.siteUrl}${node.gatsbyPath}`,
                  guid: node.updatedAt,
                  custom_elements: [
                    {
                      'content:encoded': documentToHtmlString(
                        JSON.parse(node.description.raw),
                      ),
                    },
                  ],
                });
              });
            },
            query: `
            {
              allContentfulLesson(sort: { createdAt: DESC }) {
                nodes {
                  gatsbyPath(filePath: "/lesson/{ContentfulLesson.id}")
                  createdAt
                  updatedAt
                  description {
                    raw
                  }
                  title
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Speak Biblically: RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }

          allContentfulLesson {
            nodes {
              gatsbyPath(filePath: "/lesson/{ContentfulLesson.id}")
              updatedAt
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulLesson: { nodes: allContentFulNodes },
        }: {
          allSitePage: { nodes: any };
          allContentfulLesson: { nodes: any };
        }) => {
          const contentfulNode = allContentFulNodes.reduce(
            (acc: Record<string, TNode>, node: TNode) => {
              const { gatsbyPath } = node;
              acc[gatsbyPath] = node;

              return acc;
            },
            {},
          );

          return allPages.map((page: { path: string }) => ({
            ...page,
            ...contentfulNode[page.path],
          }));
        },
        serialize: ({ path, updatedAt }: { path: string; updatedAt: Date }) => {
          return {
            url: path,
            lastmod: updatedAt,
          };
        },
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GTAG_ANALYTICS}`],
      },
    },
  ],
};

export default config;
