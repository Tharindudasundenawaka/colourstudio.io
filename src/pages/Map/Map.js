import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './map.css';

function Map({ latitude, longitude, title }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 14,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: title,
      });
    });
  }, [latitude, longitude, title]);

  return <div ref={mapRef} style={{ height: "400px", width: "90%" }} />;
}

export default Map;

