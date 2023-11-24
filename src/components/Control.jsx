import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppContext from "../AppContext";

const Control = () => {
    const {
        lightIntensity,
        setLightIntensity,
        nutrientLevel,
        setNutrientLevel,
        wateringFrequency,
        soilMoisture,
        setSoilMoisture,
        humidity,
        setHumidity,
        nutrientSensor,
      } = useContext(AppContext);

  const handleSave = () => {
    // Save the control settings to your backend or API
    console.log("Control settings saved:", {
      lightIntensity,
      nutrientLevel,
      wateringFrequency,
      soilMoisture,
      humidity,
      nutrientSensor,
    });
  };

  return (
    <Box className="Control">
      <Typography variant="h4">Control</Typography>
      {/* Light Intensity */}
      <Box mt={4} mb={4}>
        <Typography id="light-intensity" gutterBottom>
          Light Intensity
        </Typography>
        <Slider
          value={lightIntensity}
          onChange={(e, value) => setLightIntensity(value)}
          aria-labelledby="light-intensity"
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </Box>
      {/* Nutrient Level */}
      <Box mb={4}>
        <Typography id="nutrient-level" gutterBottom>
          Nutrient Level
        </Typography>
        <Slider
          value={nutrientLevel}
          onChange={(e, value) => setNutrientLevel(value)}
          aria-labelledby="nutrient-level"
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </Box>
      {/* Soil Moisture */}
      <Box mb={4}>
        <Typography id="soil-moisture" gutterBottom>
          Soil Moisture
        </Typography>
        <Slider
          value={soilMoisture}
          onChange={(e, value) => setSoilMoisture(value)}
          aria-labelledby="soil-moisture"
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </Box>
      {/* Humidity */}
      <Box mb={4}>
        <Typography id="humidity" gutterBottom>
          Humidity
        </Typography>
        <Slider
          value={humidity}
          onChange={(e, value) => setHumidity(value)}
          aria-labelledby="humidity"
          valueLabelDisplay="auto"
          min={0}
          max={100}
        />
      </Box>
      {/* Save Settings Button */}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Settings
      </Button>
    </Box>
  );
};

export default Control;
