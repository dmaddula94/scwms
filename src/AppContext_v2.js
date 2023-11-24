import { createContext, useState, useEffect } from "react";
import { generateMockData } from "./workerHelper";

const AppContext = createContext();

let moisture = [];
let temp = [];
let light = [];
let hum = [];
let nut = [];

export const AppProvider = ({ children }) => {
  const [lightIntensity, setLightIntensity] = useState(50);
  const [nutrientLevel, setNutrientLevel] = useState(50);
  const [wateringFrequency, setWateringFrequency] = useState(12);
  const [soilMoisture, setSoilMoisture] = useState(50);
  const [humidity, setHumidity] = useState(50);
  const [nutrientSensor, setNutrientSensor] = useState(50);
  const [soilMoistureData, setSoilMoistureData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [lightData, setLightData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [nutrientSensorData, setNutrientSensorData] = useState([]);

  const fetchMockData = async (update) => {
    moisture = await generateMockData("generateMockSoilMoistureData", update, moisture);
    temp = await generateMockData("generateMockTemperatureData", update, temp);
    light = await generateMockData("generateMockLightData", update, light);
    hum = await generateMockData("generateMockHumidityData", update, hum);
    nut = await generateMockData("generateMockNutrientSensorData", update, nut);

    setSoilMoistureData(moisture);
    setTemperatureData(temp);
    setLightData(light);
    setHumidityData(hum);
    setNutrientSensorData(nut);
  };

  useEffect(() => {
    fetchMockData(false);

    setInterval(() => {
        fetchMockData(true);
    }, 0.5*60000);

    return () => {
        clearInterval();
    }
  }, []);

  const sync = () => {
    fetchMockData(true);
  }

  return (
    <AppContext.Provider
      value={{
        lightIntensity,
        setLightIntensity,
        nutrientLevel,
        setNutrientLevel,
        wateringFrequency,
        setWateringFrequency,
        soilMoisture,
        setSoilMoisture,
        humidity,
        setHumidity,
        nutrientSensor,
        setNutrientSensor,
        soilMoistureData,
        temperatureData,
        lightData,
        humidityData,
        nutrientSensorData,
        setSoilMoistureData,
        setTemperatureData,
        setLightData,
        setHumidityData,
        setNutrientSensorData,
        sync
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
