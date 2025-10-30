// components/MapView.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from './MapView.module.css'

const MapView = () => {
    return (
      <div className={styles["map-card"]}>
        <div className={styles["map-title"]}>Office Location</div>
        <MapContainer
          center={[19.8762, 75.3433]}
          zoom={6}
          style={{ height: "280px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[19.8762, 75.3433]}>
            <Popup>You are here — Maharashtra, India.</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
};

export default MapView;
