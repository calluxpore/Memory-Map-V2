import { Menu, X } from 'lucide-react';
import { useMemoryStore } from '../store/memoryStore';

export function Sidebar() {
  const memories = useMemoryStore((state) => state.memories);
  const isSidebarOpen = useMemoryStore((state) => state.isSidebarOpen);
  const toggleSidebar = useMemoryStore((state) => state.toggleSidebar);
  const setSelectedMemory = useMemoryStore((state) => state.setSelectedMemory);
  const setFullscreen = useMemoryStore((state) => state.setFullscreen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 z-[1000] bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        )}
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 transform z-[999] ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '320px' }}
      >
        <div className="p-6 pt-16 h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Memories</h2>
          <div className="space-y-4">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedMemory(memory);
                  setFullscreen(true);
                }}
              >
                <img
                  src={memory.image}
                  alt={memory.label}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{memory.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(memory.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {memories.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                Click anywhere on the map to add memories
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
