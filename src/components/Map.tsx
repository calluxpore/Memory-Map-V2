import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemoryStore } from '../store/memoryStore';
import { DraggableMarker } from './DraggableMarker';
import { LatLng } from 'leaflet';

const TORONTO_POSITION: [number, number] = [43.6494, -79.3891];

function MapEvents() {
  const map = useMap();
  const addMemory = useMemoryStore((state) => state.addMemory);

  useEffect(() => {
    const handleClick = (e: L.LeafletMouseEvent) => {
      const reader = new FileReader();
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = async (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;

        reader.onload = () => {
          const image = reader.result as string;
          const label = prompt('Enter a label for this memory:') || 'Untitled';
          
          addMemory({
            position: new LatLng(e.latlng.lat, e.latlng.lng),
            image,
            label,
          });
        };

        reader.readAsDataURL(file);
      };

      input.click();
    };

    map.on('click', handleClick);
    return () => map.off('click', handleClick);
  }, [map, addMemory]);

  return null;
}

export function Map() {
  const mapRef = useRef<L.Map>(null);
  const memories = useMemoryStore((state) => state.memories);
  const isSidebarOpen = useMemoryStore((state) => state.isSidebarOpen);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current?.invalidateSize();
      }, 100);
    }
  }, [isSidebarOpen]);

  const positions = memories.map((memory) => [
    memory.position.lat,
    memory.position.lng,
  ]);

  return (
    <MapContainer
      ref={mapRef}
      center={TORONTO_POSITION}
      zoom={13}
      className="h-screen w-full"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {memories.map((memory) => (
        <DraggableMarker key={memory.id} memory={memory} />
      ))}
      {positions.length > 1 && (
        <Polyline
          positions={positions}
          color="#4F46E5"
          weight={2}
          opacity={0.7}
        />
      )}
      <MapEvents />
    </MapContainer>
  );
}