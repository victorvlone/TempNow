import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styles from "./Map.module.css";

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const centerPosition = [-15.7801, -47.9292]; 

function Map() {
  return (
    <section className={styles.map_container}>
      
      <MapContainer 
        center={centerPosition} 
        zoom={5}
        scrollWheelZoom={true} 
        className={styles.map_view}
      >
        
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={centerPosition}>
          <Popup>
            Este é o mapa do seu projeto.
          </Popup>
        </Marker>
        
      </MapContainer>
      
    </section>
  );
}

export default Map;