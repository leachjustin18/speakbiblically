import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Link } from 'gatsby';

import Layout from '../layout';
import PastLessons from '../components/PastLessons';

interface HomePage extends WithStyles<typeof styles> {}

const styles = theme => ({
  section: {
    padding: '1rem',
  },
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
    textTransform: 'uppercase',
    padding: '6px 16px',
    fontSize: '0.875rem',
    minWidth: '64px',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  '@media (min-width: 768px)': {
    section: {
      maxWidth: '1030px',
      backgroundColor: 'rgba(255, 255, 255, .7)',
      margin: '0 auto',
      padding: '50px',
    },
  },
});

const HomePage: FC<HomePage> = ({ classes }) => (
  <Layout>
    <section className={classes.section}>
      <Typography component="h2" variant="h2" gutterBottom={true}>
        Recent Lesson
      </Typography>

      <Typography variant="subtitle2" component="p" gutterBottom={true}>
        <strong>Does my church teach the truth?</strong>
      </Typography>

      <Typography variant="body1" gutterBottom={true}>
        With some many different kinds of churches these days, this can be a
        hard question to answer. What's important is we look to see what the
        Bible says about it ...
      </Typography>

      <Typography
        variant="caption"
        component="span"
        className={classes.publishedDate}
        gutterBottom={true}
      >
        Date: 03/12/2019
      </Typography>

      <Link
        to="/lesson"
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

export default withStyles(styles)(HomePage);
