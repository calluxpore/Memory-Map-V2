import { create } from 'zustand';
import { LatLng } from 'leaflet';
import { Memory, MemoryStore } from '../types/memory';

export const useMemoryStore = create<MemoryStore>((set) => ({
  memories: [],
  selectedMemory: null,
  isFullscreen: false,
  isSidebarOpen: true,

  addMemory: (memory) =>
    set((state) => ({
      memories: [
        ...state.memories,
        {
          ...memory,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
        },
      ],
    })),

  updateMemoryPosition: (id, position) =>
    set((state) => ({
      memories: state.memories.map((memory) =>
        memory.id === id ? { ...memory, position } : memory
      ),
    })),

  setSelectedMemory: (memory) => set({ selectedMemory: memory }),
  setFullscreen: (isFullscreen) => set({ isFullscreen }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));