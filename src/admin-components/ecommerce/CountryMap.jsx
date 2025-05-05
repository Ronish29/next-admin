import React from "react";
import dynamic from "next/dynamic";

// Use dynamic import with { ssr: false } to properly handle the ES module
const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then(mod => mod.VectorMap),
  { ssr: false }
);

// Also dynamically import the world map data to avoid ES module issues
const WorldMap = dynamic(
  () => import("@react-jvectormap/world").then(mod => {
    // Return the worldMill data from the module
    return Promise.resolve(mod.worldMill);
  }),
  { ssr: false }
);

const CountryMap = ({ mapColor }) => {
  const [worldData, setWorldData] = React.useState(null);

  React.useEffect(() => {
    // Only load the map in browser environment
    import("@react-jvectormap/world")
      .then((mod) => {
        setWorldData(mod.worldMill);
      })
      .catch(err => console.error("Error loading map data:", err));
  }, []);

  // Don't render until map data is loaded
  if (!worldData) {
    return <div>Loading map...</div>;
  }

  return (
    <VectorMap
      map={worldData}
      backgroundColor="transparent"
      markerStyle={{
        initial: {
          fill: "#465FFF",
          r: 4 // Custom radius for markers
        }
      }}
      markersSelectable={true}
      markers={[
        {
          latLng: [37.2580397, -104.657039],
          name: "United States",
          style: {
            fill: "#465FFF",
            borderWidth: 1,
            borderColor: "white",
            stroke: "#383f47"
          }
        },
        {
          latLng: [20.7504374, 73.7276105],
          name: "India",
          style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" }
        },
        {
          latLng: [53.613, -11.6368],
          name: "United Kingdom",
          style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" }
        },
        {
          latLng: [-25.0304388, 115.2092761],
          name: "Sweden",
          style: {
            fill: "#465FFF",
            borderWidth: 1,
            borderColor: "white",
            strokeOpacity: 0
          }
        }
      ]}
      zoomOnScroll={false}
      zoomMax={12}
      zoomMin={1}
      zoomAnimate={true}
      zoomStep={1.5}
      regionStyle={{
        initial: {
          fill: mapColor || "#D0D5DD",
          fillOpacity: 1,
          fontFamily: "Outfit",
          stroke: "none",
          strokeWidth: 0,
          strokeOpacity: 0
        },
        hover: {
          fillOpacity: 0.7,
          cursor: "pointer",
          fill: "#465fff",
          stroke: "none"
        },
        selected: {
          fill: "#465FFF"
        },
        selectedHover: {}
      }}
      regionLabelStyle={{
        initial: {
          fill: "#35373e",
          fontWeight: 500,
          fontSize: "13px",
          stroke: "none"
        },
        hover: {},
        selected: {},
        selectedHover: {}
      }}
    />
  );
};

export default CountryMap;