import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../layout';
import PastLessons from '../components/PastLessons';

interface HomePage extends WithStyles<typeof styles> {}

interface RecentLessonInterface {
  recentLesson: {
    edges: [
      {
        node: {
          date: string;
          title: string;
          description: string;
          id: number;
        };
      }
    ];
  };
}

const HomePage: FC<HomePage> = ({ classes }) => {
  const data: RecentLessonInterface = useStaticQuery(graphql`
    query homePage {
      recentLesson: allGoogleSheetLessonsRow(
        filter: { recentlesson: { eq: "Y" } }
      ) {
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

  const recentLessonData = data.recentLesson.edges[0].node;

  return (
    <Layout>
      <section>
        <Typography component="h2" variant="h2" gutterBottom={true}>
          Recent Lesson
        </Typography>

        <Typography variant="subtitle2" component="p" gutterBottom={true}>
          <strong>{recentLessonData.title}</strong>
        </Typography>

        <Typography
          variant="body1"
          gutterBottom={true}
          className={classes.lessonDescription}
        >
          {recentLessonData.description}
        </Typography>

        <Typography
          variant="caption"
          component="span"
          className={classes.publishedDate}
          gutterBottom={true}
        >
          Date: {recentLessonData.date}
        </Typography>

        <Link
          to={`/lesson?id=${recentLessonData.id}`}
          className={`${
            classes.learnMoreLink
          } MuiButton-containedPrimary MuiButton-root  MuiButtonBase-root`}
        >
          Learn More
        </Link>

        <PastLessons />
      </section>
    </Layout>
  );
};

const styles = () => ({
  publishedDate: {
    display: 'block',
  },
  learnMoreLink: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#3f51b5',
    boxShadow: `0px 1px 5px 0px rgba(0,0,0,0.2),
      0px 2px 2px 0px rgba(0,0,0,0.14),
      0px 3px 1px -2px rgba(0,0,0,0.12)`,
    lineHeight: 1.75,
    fontFamily: 'Montserrat, Arial',
    fontWeight: 500,
    borderRadius: '4px',
    textTransform: 'uppercase' as 'uppercase',
    padding: '6px 16px',
    fontSize: '0.875rem',
    minWidth: '64px',
    boxSizing: 'border-box' as 'border-box',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  lessonDescription: {
    maxWidth: 1000,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as 'nowrap',
  },
});

export default withStyles(styles)(HomePage);
