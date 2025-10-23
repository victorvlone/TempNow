import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const DEFAULT_MAP_DATA = {
  coord: { lat: -15.7801, lon: -47.9292 },
};

function Map({ dadosDoClima }) {
  const dataToDisplay = dadosDoClima || DEFAULT_MAP_DATA;
  const { coord } = dataToDisplay;
  const mapCenter = [coord.lat, coord.lon];
  return (
    <section className={styles.map_container}>
      <MapContainer
        center={mapCenter}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map_view}
        key={coord.lat}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={mapCenter}>
          <Popup>Este é o mapa do seu projeto.</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
