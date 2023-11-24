import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom bin icon based on fill level
const binIcons = {
    empty: 'https://icons-for-free.com/iconfiles/png/512/bx+trash+alt-1325051922691766757.png', // replace with your path to the icon
    low: 'https://icons-for-free.com/iconfiles/png/512/bx+trash-1325051922822303093.png',
    medium: 'https://icons-for-free.com/iconfiles/png/512/bxs+trash-1325051986401389927.png',
    full: 'https://icons-for-free.com/iconfiles/png/512/bxs+trash+alt-1325051986341694184.png'
};

const getBinIcon = (fillLevel) => {
    let iconUrl;

    if (fillLevel > 75) {
        iconUrl = binIcons.full;
    } else if (fillLevel > 50) {
        iconUrl = binIcons.medium;
    } else if (fillLevel > 25) {
        iconUrl = binIcons.low;
    } else {
        iconUrl = binIcons.empty;
    }

    return new L.Icon({
        iconUrl,
        iconSize: [35, 45], // Size of the icon
        iconAnchor: [17, 55], // Point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });
};

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
                    icon={getBinIcon(bin.currentFillLevel)}
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
