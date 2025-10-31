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

function Map({ dadosDoClima, darkMode }) {
  const dataToDisplay = dadosDoClima || DEFAULT_MAP_DATA;
  const { coord } = dataToDisplay;
  const mapCenter = [coord.lat, coord.lon];
  let stadiaUrl = "";
  let stadiaAttribution = "";
  if (darkMode) {
    stadiaUrl =
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}";
    stadiaAttribution =
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  } else {
    stadiaUrl =
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}";
    stadiaAttribution =
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  }
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
          attribution={stadiaAttribution}
          url={stadiaUrl}
          ext="png"
          maxZoom={20}
        />

        <Marker position={mapCenter}>
          <Popup>Este é o mapa do seu projeto.</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
