import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Typography from '../../components/typography/Typography';
import ArticleWrapper from '../../components/articleWrapper/ArticleWrapper';

type NodeProps = {
  node: {
    date: string;
    title: string;
    description: string;
    id: string;
  };
};

type DataProps = {
  allGoogleSheetLessonsRow: {
    edges: NodeProps[];
  };
};

const PastLessons = (): ReactElement => {
  const data: DataProps = useStaticQuery(graphql`
    query pastLessonsQuery {
      allGoogleSheetLessonsRow(filter: { recentlesson: { eq: "N" } }) {
        edges {
          node {
            date
            title
            description
            id
          }
        }
      }
    }
  `);

  const pastLessonsData = data.allGoogleSheetLessonsRow?.edges;

  if (!pastLessonsData?.length) return <></>;

  const SectionPast = styled.div`
    margin-top: 1rem;
  `;

  return (
    <SectionPast>
      <Typography variant="h3" fontWeight={300} gutterBottom>
        Past lesson(s)
      </Typography>

      {pastLessonsData.map(({ node }) => (
        <ArticleWrapper
          key={node.id}
          title={node.title}
          date={node.date}
          description={node.description}
          id={node.id}
        />
      ))}
    </SectionPast>
  );
};

export default PastLessons;
