import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const MapComponent = ({ onLocationSelect }) => {
  const [userLocation, setUserLocation] = useState([20.5937, 78.9629]); // Default: India
  const [selectedLocation, setSelectedLocation] = useState(null); // User-pinned location

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  // Function to handle map clicks and set marker
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedLocation([lat, lng]);
        onLocationSelect([lat, lng]); // Pass the selected location to parent
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={userLocation}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* User's Current Location Marker */}
      <Marker position={userLocation}>
        <Popup>Your Current Location</Popup>
      </Marker>

      {/* Pinned Request Location Marker */}
      {selectedLocation && (
        <Marker position={selectedLocation}>
          <Popup>Pinned Request Location</Popup>
        </Marker>
      )}

      <MapClickHandler />
    </MapContainer>
  );
};

export default MapComponent;
