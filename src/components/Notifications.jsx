import React, { useState, useEffect, useContext } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AppContext from "../AppContext";
const mockNotifications = [];

const generateMockNotifications = (data) => {

  data.forEach((bin) => {
    if (bin.currentFillLevel > 40 && bin.currentFillLevel <= 60) {
      mockNotifications.push({
        id: bin.id,
        location: JSON.stringify(bin.location),
        type: "info",
        message: `${bin.id} has ${bin.currentFillLevel}% waste`,
      });
    }else if (bin.currentFillLevel > 60 && bin.currentFillLevel <= 80) {
      mockNotifications.push({
        id: bin.id,
        location: JSON.stringify(bin.location),
        type: "warning",
        message: `${bin.id} has ${bin.currentFillLevel}% waste`,
      });
    }else if (bin.currentFillLevel > 80) {
      mockNotifications.push({
        id: bin.id,
        location: JSON.stringify(bin.location),
        type: "error",
        message: `${bin.id} has ${bin.currentFillLevel}% waste`,
      });
    }
  })
  // Add more mock notifications based on your requirements
  return mockNotifications.reverse();
};

const Notifications = () => {
  const { data } = useContext(AppContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const mockNotifications = generateMockNotifications(data);
    setNotifications(mockNotifications);
  }, [data]);

  return (
    <div className="Notifications">
      <h2>Notifications</h2>
      <Stack spacing={2}>
        {notifications.map((notification, index) => (
          <Alert key={index} severity={notification.type}>
            {notification.message}
          </Alert>
        ))}
      </Stack>
    </div>
  );
};

export default Notifications;
