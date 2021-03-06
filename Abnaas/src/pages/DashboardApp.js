// material
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

function Dashboardapp() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/products`).then((res) => console.log(res));
  });
  console.log(products);
  return (
    <Page title="Dashboard ">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Dashboardapp;
