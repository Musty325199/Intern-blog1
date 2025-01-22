import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = () => {
  const position = [51.505, -0.09]; // Latitude and Longitude
  const zoom = 13; // Initial zoom level

  return (
  <div className='m-5 md:m-10 border py-4'>
    <h3 className='text-center capitalize text-2xl text-violet-950 font-semibold mb-5'>Our location</h3>
      <MapContainer center={position} zoom={zoom} style={{ height: "500px", width: "100%", zIndex: '-50' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Daily Blogs <br/>  Shop
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  );
};

export default LeafletMap;
