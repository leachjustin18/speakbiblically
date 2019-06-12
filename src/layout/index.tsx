import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import withRoot from '../withRoot';
import Header from '../components/Header';
import Bible from '../images/Bible.jpg';

interface LayoutProps extends WithStyles<typeof styles> {
  children: JSX.Element[] | JSX.Element;
}

const styles = () => ({
  backGroundImage: {},
  '@media (min-width: 1025px)': {
    backGroundImage: {
      opacity: 0.5,
      top: 0,
      bottom: 0,
      width: '100%',
      position: 'fixed' as 'fixed',
      zIndex: -1,
      backgroundImage: `url(${Bible})`,
      backgroundSize: 'cover',
    },
  },
  childrenParent: {
    padding: '1rem',
  },
  '@media (min-width: 768px)': {
    childrenParent: {
      maxWidth: '1030px',
      backgroundColor: 'rgba(255, 255, 255, .7)',
      margin: '0 auto',
      padding: '50px',
    },
  },
});

const Layout: FC<LayoutProps> = ({ classes, children }) => (
  <main>
    <Helmet>
      <html lang="en" />
      <title>Speak Biblically</title>
      <meta
        name="description"
        content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
      />
    </Helmet>

    <Header />

    <div className={classes.childrenParent}>{children}</div>

    <div className={classes.backGroundImage} />
  </main>
);

export default withRoot(withStyles(styles)(Layout));
