import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './css/map.css';

const selectedCountries = [
  'PAK', 'ARE', 'USA', 'GBR'
];

const HighlightedMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(response => response.json())
      .then(data => {
        setGeoJsonData(data);
      })
      .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
      });

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Initial check
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  const geoJsonFeatureStyle = {
    fillColor: 'var(--primary-color)',
    fillOpacity: 0.8,
    color: 'white',
    weight: 1,
  };

  const onEachCountry = (country, layer) => {
    if (country.properties && country.properties.ADMIN) {
      const countryName = country.properties.ADMIN;
      layer.bindTooltip(countryName);
    }
  };

  const filterCountries = (feature) => {
    return selectedCountries.includes(feature.properties.ISO_A3);
  };

  return (
    <center>
    <MapContainer center={[30, -30]} zoom={isMobile ? 1 : 2.5} style={{ height: '80vh', width: '100%' }}
    scrollWheelZoom={false} // Disable scroll wheel zooming
    dragging={false} // Disable map dragging
    touchZoom={false} // Disable touch zooming
    doubleClickZoom={false} // Disable double click zooming
    zoomControl={false} // Disable zoom control buttons
    >
      <TileLayer url="http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" 
      opacity={1} // Set opacity for the tiles
      />
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={geoJsonFeatureStyle}
          onEachFeature={onEachCountry}
          filter={filterCountries}
        />
      )}
    </MapContainer>
    </center>
  );
};

export default HighlightedMap;
