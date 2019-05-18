import React, { FC } from 'react';
import Helmet from 'react-helmet';
import withRoot from '../withRoot';
import Header from '../components/Header';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => (
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

    {children}
  </main>
);

export default withRoot(Layout);
