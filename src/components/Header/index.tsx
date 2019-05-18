import React, { FC } from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';

interface Header extends WithStyles<typeof styles> {}

const styles = () => ({
  header: {
    backgroundColor: '#454040',
    paddingBottom: '1.111rem',
  },
  title: {},
  '@media (max-width: 37.5rem)': {
    title: {
      fontSize: '18vw',
    },
  },
  titleLink: {
    color: '#d9a762',
    textDecoration: 'none',
  },
});

const Header: FC<Header> = ({ classes }) => (
  <header className={classes.header}>
    <Typography
      component="h1"
      variant="h1"
      align="center"
      className={classes.title}
    >
      <Link to="/" className={classes.titleLink}>
        Speak Biblically
      </Link>
    </Typography>
  </header>
);

export default withStyles(styles)(Header);
