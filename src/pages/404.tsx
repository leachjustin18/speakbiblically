import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Typography from '../components/Typography';

const LinkGatsby = ({ className }: { className?: string }) => (
  <Link className={className} to="/">
    Home page
  </Link>
);

const LinkHome = styled(LinkGatsby)`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.14rem;
`;

const PageNotFound = (): JSX.Element => (
  <Layout>
    <Typography variant="h2" gutterBottom>
      Page not found
    </Typography>

    <Typography fontSize="1.14rem">
      Please return to the <LinkHome /> and view one of our lesson(s)
    </Typography>
  </Layout>
);

export default PageNotFound;
