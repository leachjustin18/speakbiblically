import React from 'react';

interface LayoutProps {
  children: JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => <main>{children}</main>;

export default Layout;
