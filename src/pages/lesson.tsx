import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import YouTube from 'react-youtube';
import Layout from '../layout';

const youTubeOptions: { playerVars: { rel: number } } = {
  playerVars: {
    rel: 0,
  },
};

interface Lesson extends WithStyles<typeof styles> {}

const Lesson: FC<Lesson> = ({ classes }) => {
  const search = window.location.search;
  
  const searchId = search.indexOf('id') > -1 && search.split('id=')[1];

  const data = searchId 
    && useStaticQuery(graphql`
    query lessonQuery {
      lessons: allGoogleSheetLessonsRow {
        edges {
          node {
            date
            title
            description
            id
            youtubeid
          }
        }
      }
    }
  `);

  const retrievedLesson = data && data.lessons.edges.find(({node}) => 
    node.id === searchId
  ).node;

   if(retrievedLesson) {
     return (
  <Layout>
    <section className={classes.section}>
      <Typography
        component="h3"
        variant="h3"
        gutterBottom={true}
        className={classes.title}
      >
        {retrievedLesson.title}
      </Typography>

      <div className={classes.youTubeVideoContainer}>
        <YouTube
          videoId={retrievedLesson.youtubeid}
          opts={youTubeOptions}
          className={classes.youTube}
        />
      </div>

      <Typography component="p" variant="body1" gutterBottom={true}>
        {retrievedLesson.description}
      </Typography>

      <Typography component="h4" variant="h4" gutterBottom={true}>
        Related Articles:
      </Typography>

      <ul>
        <li>
          <a href="/">How many churches should there be?</a>
        </li>
        <li>
          <a href="/">What do I have to do to be saved?</a>
        </li>
      </ul>
    </section>
  </Layout>
)
     } 

     else {
       return (
       <Layout>
         <section className={classes.section}>
         :( Lesson not found.  Please return to <Link to="/">Home Page</Link>
         </section>
       </Layout>
       );
     }
};

const styles = () => ({
  title: {},
  youTubeVideoContainer: {},
  youTube: {},
  section: {},
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
