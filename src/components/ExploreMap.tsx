"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  APARTMENT_COORDS,
  type Landmark,
  type LandmarkCategory,
} from "@/data/landmarks";

const categoryColors: Record<LandmarkCategory, string> = {
  Food: "#d97706",
  Shops: "#7c3aed",
  Sights: "#059669",
  Services: "#dc2626",
};

const apartmentColor = "#0f172a";

function pinIcon(color: string, isApartment = false): L.DivIcon {
  const size = isApartment ? 36 : 28;
  const inner = isApartment
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"/></svg>`
    : "";
  return L.divIcon({
    className: "pp-pin",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;
      background:${color};transform:rotate(-45deg);
      box-shadow:0 2px 6px rgba(0,0,0,0.3);
      display:flex;align-items:center;justify-content:center;
      border:2px solid white;
    "><div style="transform:rotate(45deg);">${inner}</div></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

function FocusController({
  focusId,
  landmarks,
}: {
  focusId: string | null;
  landmarks: Landmark[];
}) {
  const map = useMap();
  useEffect(() => {
    if (!focusId) return;
    const target = landmarks.find((l) => l.id === focusId);
    if (!target) return;
    map.flyTo([target.lat, target.lng], 17, { duration: 0.8 });
  }, [focusId, landmarks, map]);
  return null;
}

export default function ExploreMap({
  landmarks,
  focusId,
}: {
  landmarks: Landmark[];
  focusId: string | null;
}) {
  return (
    <MapContainer
      center={[APARTMENT_COORDS.lat, APARTMENT_COORDS.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={[APARTMENT_COORDS.lat, APARTMENT_COORDS.lng]}
        icon={pinIcon(apartmentColor, true)}
      >
        <Popup>
          <strong>Peaks &amp; Pedals Transient</strong>
          <br />
          Your stay starts here.
        </Popup>
      </Marker>

      {landmarks.map((l) => (
        <Marker
          key={l.id}
          position={[l.lat, l.lng]}
          icon={pinIcon(categoryColors[l.category])}
        >
          <Popup>
            <strong>{l.name}</strong>
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>
              {l.category}
            </span>
            {l.description && (
              <>
                <br />
                {l.description}
              </>
            )}
            {l.mapsUrl && (
              <>
                <br />
                <a href={l.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </>
            )}
          </Popup>
        </Marker>
      ))}

      <FocusController focusId={focusId} landmarks={landmarks} />
    </MapContainer>
  );
}
