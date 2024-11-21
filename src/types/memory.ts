import { LatLng } from 'leaflet';

export interface Memory {
  id: string;
  position: LatLng;
  image: string;
  label: string;
  timestamp: number;
}

export interface MemoryStore {
  memories: Memory[];
  selectedMemory: Memory | null;
  isFullscreen: boolean;
  isSidebarOpen: boolean;
  addMemory: (memory: Omit<Memory, 'id' | 'timestamp'>) => void;
  updateMemoryPosition: (id: string, position: LatLng) => void;
  setSelectedMemory: (memory: Memory | null) => void;
  setFullscreen: (isFullscreen: boolean) => void;
  toggleSidebar: () => void;
}