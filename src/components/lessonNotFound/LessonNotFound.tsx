import { Link } from 'gatsby';
import React, { ReactElement } from 'react';
import Layout from '../../layout/Layout';
import Typography from '../typography/Typography';

const LessonNotFound = (): ReactElement => (
  <Layout>
    <Typography variant="h2" gutterBottom fontWeight={300}>
      Uh oh!
    </Typography>
    <Typography variant="h3" gutterBottom fontWeight={300}>
      We&apos;re sorry, lesson not found.
    </Typography>
    Please return to the <Link to="/">Home Page</Link> and view one of our other
    lesson(s).
  </Layout>
);

export default LessonNotFound;
