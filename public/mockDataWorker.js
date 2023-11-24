const DATA_COUNT = 200;
let date = new Date();

const generateMockSoilMoistureData = (refresh, prevData) => {
  let n = 0;
  const data = refresh ? prevData : [];
  let count = refresh ? 5 : DATA_COUNT;
  while (n < count) {
    n++;
    data.push({
      date: new Date(date.getTime() - 1000 * (60 * n)),
      value: Math.floor(Math.random() * 100) + 1,
    });
  }

  return data.sort((a, b) => b.date - a.date);
};

const generateMockTemperatureData = (refresh, prevData) => {
  let n = 0;
  const data = refresh ? prevData : [];
  let count = refresh ? 5 : DATA_COUNT;
  while (n < count) {
    n++;
    data.push({
      date: new Date(date.getTime() - 1000 * (60 * n)),
      min: Math.floor(Math.random() * 20) + 1,
      max: Math.floor(Math.random() * 20) + 1,
    });
  }

  return data.sort((a, b) => b.date - a.date);
};

const generateMockLightData = (refresh, prevData) => {
  let n = 0;
  const data = [];
  let sum = 100
  const numbers = []
  for (let i = 0; i < 2; i++) {
      const randomNumber = Math.floor(Math.random() * sum)
      sum -= randomNumber < 0 ? 0 : randomNumber
      numbers.push(randomNumber < 0 ? 0 : randomNumber)
  }
numbers.push(sum)
  while (n < 3) {
    let obj;
    if (n === 0) {
      obj = {
        date: new Date(date.getTime() - 1000 * (60 * n)),
        name: "Low",
        value: numbers[0],
      }
    } else if (n === 1) {
      obj = {
        date: new Date(date.getTime() - 1000 * (60 * n)),
        name: "Medium",
        value: numbers[1],
      }
    } else {
      obj = {
        date: new Date(date.getTime() - 1000 * (60 * n)),
        name: "High",
        value: numbers[2],
      }
    }
    n++;
    data.push(obj);
  }

  return data.sort((a, b) => b.date - a.date);
};

const generateMockHumidityData = (refresh, prevData) => {
  let n = 0;
  const data = refresh ? prevData : [];
  let count = refresh ? 5 : DATA_COUNT;
  while (n < count) {
    n++;
    data.push({
      date: new Date(date.getTime() - 1000 * (60 * n)),
      value: Math.floor(Math.random() * 100) + 1,
    });
  }

  return data.sort((a, b) => b.date - a.date);
};

const generateMockNutrientSensorData = (refresh, prevData) => {
  let n = 0;
  const data = refresh ? prevData : [];
  let count = refresh ? 5 : DATA_COUNT;
  while (n < count) {
    n++;
    data.push({
      date: new Date(date.getTime() - 1000 * (60 * n)),
      nitrogen: Math.floor(Math.random() * 100) + 1,
      phosphorus: Math.floor(Math.random() * 100) + 1,
      potassium: Math.floor(Math.random() * 100) + 1
    });
  }

  return data.sort((a, b) => b.date - a.date);
};
self.onmessage = (e) => {
  const { type, update, prevData } = e.data;
  let data;
  date = new Date();

  switch (type) {
    case "generateMockSoilMoistureData":
      data = generateMockSoilMoistureData(update, prevData);
      break;

    case "generateMockTemperatureData":
      data = generateMockTemperatureData(update, prevData);
      break;

    case "generateMockLightData":
      data = generateMockLightData(update, prevData);
      break;

    case "generateMockHumidityData":
      data = generateMockHumidityData(update, prevData);
      break;

    case "generateMockNutrientSensorData":
      data = generateMockNutrientSensorData(update, prevData);
      break;

    default:
      throw new Error("Unknown type for generating mock data.");
  }
  self.postMessage(data);
};
