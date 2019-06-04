import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Layout from '../layout';
import PastLessons from '../components/PastLessons';

interface HomePage extends WithStyles<typeof styles> {}

const styles = () => ({
  section: {
    padding: '1rem',
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
      <Typography component="h2" variant="h3" gutterBottom={true}>
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

      <Button variant="contained" color="primary">
        Learn More
      </Button>

      <PastLessons />
    </section>
  </Layout>
);

export default withStyles(styles)(HomePage);
