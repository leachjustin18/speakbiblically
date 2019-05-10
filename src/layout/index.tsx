import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import { WithStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

interface LayoutProps extends WithStyles<typeof styles> {
  children: JSX.Element[] | JSX.Element;
}

const styles = theme => ({
  main: {
    display: 'flex',
    margin: '0 auto',
    width: '80vw',
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
  },
});

const Layout: FC<LayoutProps> = ({ classes, children }) => (
  <main className={classes.main}>
    <Helmet>
      <html lang="en" />
      <title>Speak Biblically</title>
      <meta
        name="description"
        content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
      />
    </Helmet>
    <Paper className={classes.paper} elevation={1}>
      {children}
    </Paper>
  </main>
);

export default withRoot(withStyles(styles)(Layout));
