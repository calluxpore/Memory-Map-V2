import { useRef, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useMemoryStore } from '../store/memoryStore';
import { Memory } from '../types/memory';

interface DraggableMarkerProps {
  memory: Memory;
}

export function DraggableMarker({ memory }: DraggableMarkerProps) {
  const markerRef = useRef<L.Marker>(null);
  const updateMemoryPosition = useMemoryStore((state) => state.updateMemoryPosition);
  const setSelectedMemory = useMemoryStore((state) => state.setSelectedMemory);
  const setFullscreen = useMemoryStore((state) => state.setFullscreen);

  const icon = useMemo(
    () =>
      new L.DivIcon({
        className: 'custom-marker',
        html: `
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
            <img src="${memory.image}" alt="${memory.label}" class="w-full h-full object-cover" />
          </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 24],
      }),
    [memory]
  );

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker) {
          const newPosition = marker.getLatLng();
          updateMemoryPosition(memory.id, newPosition);
        }
      },
      click() {
        setSelectedMemory(memory);
        setFullscreen(true);
      },
    }),
    [memory, updateMemoryPosition, setSelectedMemory, setFullscreen]
  );

  return (
    <Marker
      ref={markerRef}
      position={memory.position}
      draggable={true}
      eventHandlers={eventHandlers}
      icon={icon}
    >
      <Popup>
        <div className="text-center">
          <h3 className="font-semibold">{memory.label}</h3>
          <p className="text-sm text-gray-600">
            {new Date(memory.timestamp).toLocaleDateString()}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}