import React, { FC } from 'react';
import Layout from '../layout';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Bible from '../images/Bible.jpg';

interface HomePage extends WithStyles<typeof styles> {}

const styles = () => ({
  title: {
    color: '#d9a762',
    backgroundColor: '#454040',
    paddingBottom: '20px',
    marginBottom: 0,
  },
  section: {
    maxWidth: '1030px',
    backgroundColor: 'rgba(255, 255, 255, .7)',
    margin: '0 auto',
    padding: '50px',
  },
  backGroundImage: {
    opacity: 0.5,
    top: 0,
    bottom: 0,
    width: '100%',
    position: 'absolute' as 'absolute',
    zIndex: -1,
    margin: 0,
  },
});

const HomePage: FC<HomePage> = ({ classes }) => (
  <Layout>
    <Typography
      component="h1"
      variant="h1"
      gutterBottom={true}
      align="center"
      className={classes.title}
    >
      Speak Biblically
    </Typography>

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

      <Typography component="h3" variant="h3" gutterBottom={true}>
        Past Lessons
      </Typography>
    </section>

    <img
      src={Bible}
      alt="Holy Bible King James Version"
      className={classes.backGroundImage}
    />
  </Layout>
);

export default withStyles(styles)(HomePage);
