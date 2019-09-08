import React, { FC, Fragment } from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Layout from '../layout';

interface PageNotFound extends WithStyles<typeof styles> {}

const PageNotFound: FC<PageNotFound> = ({ classes }) => (
  <Layout>
    <Fragment>
      <Typography component="h3" variant="h3" gutterBottom={true}>
        Page Not Found
      </Typography>
      Please return to the{' '}
      <Link to="/" className={classes.homeLink}>
        Home Page
      </Link>{' '}
      and view one of our lesson(s).
    </Fragment>
  </Layout>
);

const styles = () => ({
  homeLink: {
    color: fade('#000', 0.8),
  },
});

export default withStyles(styles)(PageNotFound);
