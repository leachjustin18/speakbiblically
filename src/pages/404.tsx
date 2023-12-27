import React from 'react';
import { Link } from 'gatsby';
import { Typography, Paper, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { red } from '@mui/material/colors';

const PageNotFound = () => (
  <Paper
    sx={{
      width: '95%',
      margin: '0 auto',
      textAlign: 'center',
      padding: '16px 0',
    }}
    elevation={3}
  >
    <ErrorOutlineIcon sx={{ color: red[900], fontSize: 50 }} />
    <Typography variant="h2" gutterBottom>
      Lesson or page not found
    </Typography>

    <Button component={Link} variant="outlined" to="/">
      Return to home
    </Button>
  </Paper>
);

export default PageNotFound;
