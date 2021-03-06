import React, { FC, Fragment } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface PastLessons extends WithStyles<typeof styles> {}

type PastLessonsType = {
  pastLessons: {
    edges: [
      {
        node: {
          date: string;
          title: string;
          description: string;
          id: string;
        };
      }
    ];
  };
};

const PastLessons: FC<PastLessons> = ({ classes }) => {
  const data: PastLessonsType = useStaticQuery(graphql`
    query pastLessonsQuery {
      pastLessons: allGoogleSheetLessonsRow(
        filter: { recentlesson: { eq: "N" } }
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

  const pastLessonsData = data.pastLessons ? data.pastLessons.edges : null;

  if (pastLessonsData && pastLessonsData.length) {
    return (
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
          {pastLessonsData.map(({ node }, index) => (
            <Fragment key={node.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={node.title}
                  secondary={
                    <Fragment>
                      <Typography
                        variant="caption"
                        component="span"
                        gutterBottom={true}
                        className={classes.publishedDate}
                      >
                        Date: {node.date}
                      </Typography>

                      <Typography
                        variant="body2"
                        component="span"
                        gutterBottom={true}
                        className={classes.lessonDescription}
                      >
                        {node.description}
                      </Typography>

                      <Link
                        to={`/lesson?id=${node.id}`}
                        className={classes.learnMoreLink}
                      >
                        Learn More about {node.title}
                      </Link>
                    </Fragment>
                  }
                />
              </ListItem>

              {pastLessonsData.length !== index + 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Fragment>
    );
  }

  return null;
};

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
  lessonDescription: {
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as 'nowrap',
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
});

export default withStyles(styles)(PastLessons);
