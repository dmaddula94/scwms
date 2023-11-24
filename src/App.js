import React, { useEffect, useState, useContext } from "react";
import {
  Notifications,
  Analytics,
  Reporting,
} from "./components";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSnackbar } from 'notistack';
import AppContext from "./AppContext";

function App() {
  const [activeComponent, setActiveComponent] = useState("analytics");
  const { enqueueSnackbar } = useSnackbar();
  const { data } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setActiveComponent(newValue);
  };

  const notify = () => {
    data.forEach((bin) => {
      if (bin.currentFillLevel > 60 && bin.currentFillLevel <= 80) {
        enqueueSnackbar(`${bin.id} has ${bin.currentFillLevel}% waste`, {
          variant: "warning",
        });
      } else if (bin.currentFillLevel > 80) {
        enqueueSnackbar(`${bin.id} has ${bin.currentFillLevel}% waste`, {
          variant: "error",
        });
      }
    })
  }

  useEffect(() => {
    notify();
  }, [data]);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart City Waste Management System
          </Typography>
          <Tabs
            value={activeComponent}
            onChange={handleChange}
            aria-label="navigation tabs"
          >
            {/* <Tab value="dashboard" label="Dashboard" /> */}
            <Tab value="analytics" label="Dashboard" />
            <Tab value="notifications" label="Notifications" />
            
            <Tab value="reporting" label="Reporting" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        {/* {activeComponent === "dashboard" && <Dashboard />} */}
        {activeComponent === "notifications" && <Notifications />}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "reporting" && <Reporting />}
      </Container>
    </div>
  );
}

export default App;
