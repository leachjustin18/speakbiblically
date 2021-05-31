import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Typography from '../components/typography/Typography';
import LessonNotFound from '../components/lessonNotFound/LessonNotFound';
import RelatedArticles from '../components/relatedArticles/RelatedArticles';

type LessonDataProp = {
  node: {
    date: string;
    description: string;
    id: string;
    relatedlessons?: string;
    title: string;
    youtubeid: string;
  };
};

const YouTubeContainer = styled.div`
  margin-bottom: 0.5em;
  text-align: center;

  @media only screen and (max-width: 45rem) {
    margin-left: auto;
    margin-right: auto;
    max-width: 40rem;
  }
`;

const Title = styled(Typography)`
  @media (max-width: 37.5rem) {
    font-size: 9vw;
  }
`;

const Description = styled(Typography)`
  white-space: pre-wrap;
`;

const Lesson = (): ReactElement => {
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) return <LessonNotFound />;

  const lessonId = new URLSearchParams(window.location.search).get('id');

  if (!lessonId) return <LessonNotFound />;

  const data: {
    allGoogleSheetLessonsRow: { edges: LessonDataProp[] };
  } = useStaticQuery(graphql`
    query lessonQuery {
      allGoogleSheetLessonsRow {
        edges {
          node {
            date
            title
            description
            id
            youtubeid
            relatedlessons
          }
        }
      }
    }
  `);

  const lesson = data.allGoogleSheetLessonsRow.edges.find(
    (edge) => edge.node.id === lessonId,
  )?.node;

  if (!lesson) return <LessonNotFound />;

  const YouTubeLocal = ({ className }: { className?: string }) => (
    <YouTube
      className={className}
      videoId={lesson.youtubeid}
      opts={{
        playerVars: {
          rel: 0,
        },
      }}
    />
  );

  const YouTubeLesson = styled(YouTubeLocal)`
    @media only screen and (max-width: 45rem) {
      width: 100%;
    }
  `;

  return (
    <Layout>
      <Helmet>
        <title>{lesson.title}</title>
        <meta name="description" content={lesson.description} />
      </Helmet>

      <Title variant="h2" gutterBottom align="center">
        {lesson.title}
      </Title>

      <YouTubeContainer>
        <YouTubeLesson />
      </YouTubeContainer>

      <Description fontSize="1.14rem" gutterBottom>
        {lesson.description}
      </Description>

      {lesson.relatedlessons ? (
        <>
          <Typography variant="h3" fontSize="2.5rem" gutterBottom>
            Related articles:
          </Typography>
          <ul>
            <RelatedArticles relatedLessons={lesson.relatedlessons} />
          </ul>
        </>
      ) : null}
    </Layout>
  );
};

export default Lesson;
