import React, { FC, Fragment } from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

interface PastLessons extends WithStyles<typeof styles> {}

const styles = (theme: Theme) => ({
  pastLessonTitle: {
    marginTop: '0.35rem',
  },
  list: {
    backgroundColor: theme.palette.background.paper,
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
  description: {
    display: 'block',
  },
});

const fakePastLessons: {
  title: string;
  description: string;
  date: string;
}[] = [
  {
    title: 'Baptizim',
    description: 'What is baptism?',
    date: '01/02/2019',
  },
  {
    title: 'What is the right way to pray',
    description: 'Who should we be praying to ?',
    date: '12/20/2018',
  },
  {
    title: 'What does God say about divorce and remarriage?',
    description:
      'God is very specific about his instructions to use about marriage.',
    date: '11/03/2018',
  },
];

const PastLessons: FC<PastLessons> = ({ classes }) => (
  <Fragment>
    <Typography
      component="h3"
      variant="h3"
      gutterBottom={true}
      className={classes.pastLessonTitle}
    >
      Past Lessons
    </Typography>

    <List className={classes.list}>
      {fakePastLessons.map((lesson, index) => (
        <Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={lesson.title}
              secondary={
                <Fragment>
                  <Typography
                    variant="body2"
                    component="span"
                    gutterBottom={true}
                    className={classes.description}
                  >
                    {lesson.description}
                  </Typography>

                  <Typography
                    variant="caption"
                    component="span"
                    gutterBottom={true}
                    className={classes.publishedDate}
                  >
                    Date: {lesson.date}
                  </Typography>

                  <Link to="/lesson" className={classes.learnMoreLink}>
                    Learn More
                  </Link>
                </Fragment>
              }
            />
          </ListItem>

          {fakePastLessons.length !== index + 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  </Fragment>
);

export default withStyles(styles)(PastLessons);
