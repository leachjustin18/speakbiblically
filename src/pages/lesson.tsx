import React, { FC, Fragment, useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import LinearProgress from '@material-ui/core/LinearProgress';
import YouTube from 'react-youtube';
import Helmet from 'react-helmet';
import Layout from '../layout';

const youTubeOptions: { playerVars: { rel: number } } = {
  playerVars: {
    rel: 0,
  },
};

interface Lesson extends WithStyles<typeof styles> {}

type LessonType = {
  lessons: {
    edges: [
      {
        node: {
          date: string;
          title: string;
          description: string;
          id: string;
          youtubeid: string;
          relatedlessons: string;
        };
      }
    ];
  };
};

const Lesson: FC<Lesson> = ({ classes }) => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSearch(window.location.search);
    setIsLoading(false);
    // tslint:disable-next-line: align
  }, []);

  const getSearchId = (): string | false => {
    return search && search.indexOf('id') > -1 && search.split('id=')[1];
  };

  const data: LessonType = useStaticQuery(graphql`
    query lessonQuery {
      lessons: allGoogleSheetLessonsRow {
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

  const getLessons = () => {
    if (Object.keys(data.lessons).length && getSearchId()) {
      return data.lessons.edges.find(({ node }) => node.id === getSearchId());
    }

    return false;
  };

  const relatedLessons = (relatedLessons: string) => {
    const relatedLessonsSplit = relatedLessons.split(';');
    const relatedLessonsLength = relatedLessonsSplit.length - 1;

    return relatedLessonsSplit.map((relatedLesson, index) => {
      const relatedLessonSplit = relatedLesson.split(',');
      const name = relatedLessonSplit[0].trim();
      const url = relatedLessonSplit[1].trim();

      return (
        <li
          key={index}
          style={index !== relatedLessonsLength ? { marginBottom: 16 } : null}
        >
          <a
            href={url}
            rel="noopener nofollow"
            target="_blank"
            style={{ color: fade('#000', 0.8) }}
          >
            {name}
          </a>
        </li>
      );
    });
  };

  const retrievedLessons = getLessons();

  if (isLoading) {
    return (
      <Layout>
        <section className={classes.section}>
          <LinearProgress variant="query" />
        </section>
      </Layout>
    );
  }

  if (retrievedLessons && !isLoading) {
    return (
      <Layout>
        <section className={classes.section}>
          <Helmet>
            <title>{retrievedLessons.node.title}</title>
            <meta
              name="description"
              content={retrievedLessons.node.description}
            />
          </Helmet>

          <Typography
            component="h2"
            variant="h2"
            gutterBottom={true}
            className={classes.title}
          >
            {retrievedLessons.node.title}
          </Typography>

          <div className={classes.youTubeVideoContainer}>
            <YouTube
              videoId={retrievedLessons.node.youtubeid}
              opts={youTubeOptions}
              className={classes.youTube}
            />
          </div>

          <Typography component="p" variant="body1" gutterBottom={true}>
            {retrievedLessons.node.description}
          </Typography>

          {retrievedLessons.node.relatedlessons !== 'none' && (
            <Fragment>
              <Typography component="h4" variant="h4" gutterBottom={true}>
                Related Articles:
              </Typography>
              <ul>{relatedLessons(retrievedLessons.node.relatedlessons)}</ul>
            </Fragment>
          )}
        </section>
      </Layout>
    );
  }
  return (
    <Layout>
      <section className={classes.section}>
        <Typography component="h2" variant="h2" gutterBottom={true}>
          Uh oh!
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom={true}>
          We're sorry, lesson not found.
        </Typography>
        Please return to the{' '}
        <Link to="/" className={classes.homeLink}>
          Home Page
        </Link>{' '}
        and view one of our other lesson(s).
      </section>
    </Layout>
  );
};

const styles = () => ({
  title: {},
  youTubeVideoContainer: {},
  youTube: {},
  section: {},
  relatedArticleLinks: {
    color: fade('#000', 0.8),
  },
  homeLink: {
    color: fade('#000', 0.8),
  },
  '@media (min-width: 48rem)': {
    title: {
      textAlign: 'center' as 'center',
    },
    youTubeVideoContainer: {
      textAlign: 'center' as 'center',
    },
  },
  '@media (max-width: 37.5rem)': {
    title: {
      fontSize: '9vw',
    },
    youTubeVideoContainer: {
      maxWidth: '640px',
    },
    youTube: {
      width: '100%',
    },
  },
  '@media (max-width: 45rem)': {
    youTubeVideoContainer: {
      maxWidth: '640px',
    },
    youTube: {
      width: '100%',
    },
  },
  '@media (max-width: 64rem)': {
    section: {
      boxShadow:
        '0px 3px 7px 1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
      padding: '1.5rem 1rem',
      borderRadius: '0.3125rem',
    },
  },
});

export default withStyles(styles)(Lesson);
