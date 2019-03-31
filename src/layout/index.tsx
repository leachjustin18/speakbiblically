import React from 'react';
import Helmet from 'react-helmet';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main>
    <Helmet>
      <title>Speak Biblically</title>
      <meta
        name="description"
        content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
      />
    </Helmet>

    {children}
  </main>
);

export default Layout;
