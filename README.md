# Memory Map 🗺️

*This is a v2 of the Memory Map. I created this in collaboration with Bolt.new, which fixed some of the issues with previous code.*

V1 Repo: [https://github.com/calluxpore/Memorymap](https://github.com/calluxpore/Memorymap)  
V1 Live pages: [https://calluxpore.github.io/Memorymap/](https://calluxpore.github.io/Memorymap/)

V2 Repo: [https://github.com/calluxpore/Memory-Map-V2](https://github.com/calluxpore/Memory-Map-V2)  
V2 Live pages: [https://calluxpore.github.io/Memory-Map-V2/](https://calluxpore.github.io/Memory-Map-V2/)

---

An interactive web application for creating and managing location-based memories on a beautiful dark-themed map. Built with React, Leaflet.js, and modern web technologies.

![Memory Map Preview](https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&q=80&w=1000)

## ✨ Features

- **Interactive Map**: Built on Leaflet.js with CartoDB Dark Matter tiles
- **Memory Markers**: Create custom markers with photos and labels
- **Drag & Drop**: Easily reposition your memories on the map
- **Marker Clustering**: Automatic grouping of nearby markers for cleaner visualization
- **Connected Routes**: Visual paths between memories showing your journey
- **Fullscreen Gallery**: Click any memory to view in fullscreen mode
- **Responsive Sidebar**: Quick access to all your memories with timestamps
- **Dark Theme**: Modern, eye-friendly dark mode design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memory-map.git
cd memory-map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [Leaflet.js](https://leafletjs.com/) - Interactive Maps
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Zustand](https://github.com/pmndrs/zustand) - State Management
- [Vite](https://vitejs.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Type Safety

## 📱 Usage

1. **Adding Memories**:
   - Click anywhere on the map
   - Upload a photo
   - Add a label for your memory
   - The marker will appear at the selected location

2. **Managing Memories**:
   - Drag markers to update locations
   - Click markers to view photos in fullscreen
   - Use the sidebar to browse all memories
   - Toggle the sidebar with the menu button

3. **Viewing Connections**:
   - Lines automatically connect your memories in chronological order
   - Zoom in/out to see different clustering levels

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Map tiles by [CartoDB](https://carto.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [StackBlitz](https://stackblitz.com/)
