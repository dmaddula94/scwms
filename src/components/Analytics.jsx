import React, { useContext } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppContext from "../AppContext";
import FillLevelDistributionChart from "./FillLevelDistributionChart";
import BinTypeDistributionChart from "./BinTypeDistributionChart";
import CapacityUtilizationChart from "./CapacityUtilization";
import BinsMap from "./BinsMap";

const Analytics = () => {
  const { data } = useContext(AppContext);
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
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Bin Type
          </Typography>
          <BinTypeDistributionChart data={data} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
            Capacity
          </Typography>
          <CapacityUtilizationChart data={data} />
        </Grid>
        <Grid sx={{marginBottom: 30}} item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
            Bin Location
          </Typography>
          <BinsMap data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;
