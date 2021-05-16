import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layout/Layout';
import Typography from '../components/typography/Typography';
import PastLessons from '../components/pastLessons/PastLessons';
import ArticleWrapper from '../components/articleWrapper/ArticleWrapper';

type RecentLessonProp = {
  googleSheetLessonsRow: {
    date: string;
    title: string;
    description: string;
    id: string;
  };
};

const Home = (): ReactElement => {
  const data: RecentLessonProp = useStaticQuery(graphql`
    query homePage {
      googleSheetLessonsRow(recentlesson: { eq: "Y" }) {
        date
        title
        description
        id
      }
    }
  `);

  const recentLessonData = data.googleSheetLessonsRow;

  return (
    <Layout>
      <Typography variant="h2" gutterBottom fontWeight={300}>
        Recent lesson
      </Typography>
      <ArticleWrapper
        title={recentLessonData.title}
        date={recentLessonData.date}
        description={recentLessonData.description}
        id={recentLessonData.id}
      />
      <PastLessons />
    </Layout>
  );
};

export default Home;
