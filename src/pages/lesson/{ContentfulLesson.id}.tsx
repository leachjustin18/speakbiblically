import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import type { HeadFC } from 'gatsby';
import Layout, { LayoutHead } from '../../layout/Layout';
import { format } from 'date-fns';
import Typography from '../../components/Typography';
import { TLesson } from '../../constants/types';

const LessonTemplate = ({ data }: { data: TLesson }) => {
  const {
    title,
    createdAt,
    updatedAt,
    youTubeId,
    description,
    relatedArticles,
  } = data.contentfulLesson;

  const YouTubeLocal = ({ className }: { className?: string }) => (
    <YouTube
      className={className}
      videoId={youTubeId}
      opts={{
        playerVars: {
          rel: 0,
        },
      }}
    />
  );

  const createdDate = format(new window.Date(createdAt), 'MMMMMMM do, yyyy');
  const updatedDate = format(new window.Date(updatedAt), 'MMMMMMM do, yyyy');

  const Title = styled(Typography)`
    @media (max-width: 37.5rem) {
      font-size: 9vw;
    }
  `;

  const Date = styled(Typography)`
    display: inline-block;
    padding-bottom: 1rem;
    padding-right: 1rem;
  `;

  const YouTubeContainer = styled.div`
    margin: 1rem 0;
    text-align: center;

    @media only screen and (max-width: 45rem) {
      margin-left: auto;
      margin-right: auto;
      max-width: 40rem;
    }
  `;

  const YouTubeLesson = styled(YouTubeLocal)`
    @media only screen and (max-width: 45rem) {
      width: 100%;
    }
  `;

  const Description = styled(Typography)`
    white-space: pre-wrap;
  `;

  return (
    <Layout>
      <Title variant="h2" gutterBottom align="center">
        {title}
      </Title>
      <Date>
        <strong>Created Date:</strong> {createdDate}
      </Date>
      {updatedDate ? (
        <Date>
          <strong>Updated Date:</strong> {updatedDate}
        </Date>
      ) : null}
      <p>
        <Typography variant="caption">
          <Link to="/">Home</Link> &gt; {title}
        </Typography>
      </p>
      <YouTubeContainer>
        <YouTubeLesson />
      </YouTubeContainer>
      <Typography variant="h3" fontSize="1.6rem" gutterBottom>
        Lesson
      </Typography>
      <Description fontSize="1.14rem" gutterBottom>
        {renderRichText(description)}
      </Description>
      {relatedArticles ? (
        <div style={{ paddingTop: '3rem' }}>
          <Typography variant="h3" fontSize="1.6rem" gutterBottom>
            Related articles
          </Typography>

          {renderRichText(relatedArticles)}
        </div>
      ) : null}
    </Layout>
  );
};

export default LessonTemplate;

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
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  const dataTyped = data as TLesson;

  return (
    <LayoutHead>
      <title id="title">{dataTyped.contentfulLesson.title}</title>
    </LayoutHead>
  );
};
