import { useMemoryStore } from '../store/memoryStore';

export function FullscreenImage() {
  const selectedMemory = useMemoryStore((state) => state.selectedMemory);
  const isFullscreen = useMemoryStore((state) => state.isFullscreen);
  const setFullscreen = useMemoryStore((state) => state.setFullscreen);

  if (!selectedMemory || !isFullscreen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={() => setFullscreen(false)}
    >
      <div className="max-w-4xl w-full p-4">
        <img
          src={selectedMemory.image}
          alt={selectedMemory.label}
          className="w-full h-auto rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <h2 className="text-white text-xl font-semibold mt-4 text-center">
          {selectedMemory.label}
        </h2>
      </div>
    </div>
  );
}