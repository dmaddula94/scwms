import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppContext from "../AppContext";
import GenericTable from "./GenericTable";

const Reporting = () => {
  const {
    data
  } = useContext(AppContext);
  
  

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Reporting
      </Typography>
      {data && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <GenericTable data={data} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Reporting;
