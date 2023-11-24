import React, { useContext } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppContext from "../AppContext";
import FillLevelDistributionChart from "./FillLevelDistributionChart";

const Dashboard = () => {
    const {data} = useContext(AppContext);
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Fill Level
          </Typography>
          <FillLevelDistributionChart data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
