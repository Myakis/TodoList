import React, { FC } from 'react';
import { Container, Grid } from '@mui/material';
import Header from './Header';
import Main from './Main';

const Layout: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Main />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Layout;
