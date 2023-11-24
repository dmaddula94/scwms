import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon issue in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const BinsMap = ({ data }) => {
    const position = [41.720371, -73.94097]; // Center of Poughkeepsie, NY

    return (
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((bin, index) => (
                <Marker
                    key={index}
                    position={[bin.location.latitude, bin.location.longitude]}
                >
                    <Popup>
                        Bin: {bin.id}<br />
                        Type: {bin.type}<br />
                        Status: {bin.status}<br />
                        Current Fill Level: {bin.currentFillLevel}%<br />
                        Last Picked: {bin.lastPickedUpDate}<br />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default BinsMap;
