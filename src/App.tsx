import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar';
import { FullscreenImage } from './components/FullscreenImage';

function App() {
  return (
    <div className="relative h-screen">
      <Map />
      <Sidebar />
      <FullscreenImage />
    </div>
  );
}

export default App;