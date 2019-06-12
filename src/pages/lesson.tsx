import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import Layout from '../layout';

const youTubeOptions: { playerVars: { rel: number } } = {
  playerVars: {
    rel: 0,
  },
};

const Lesson: FC = () => (
  <Layout>
    <section>
      <Typography component="h3" variant="h3" gutterBottom={true}>
        Does my church teach the truth?
      </Typography>

      <YouTube videoId="GY0Bdt9nLT8" opts={youTubeOptions} />
    </section>
  </Layout>
);

export default Lesson;
