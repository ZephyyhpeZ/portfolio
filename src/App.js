import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Layout from './Layout';
import Pathfinding from './Pages/Pathfinding';
import World from './Pages/World';
import Music from './Pages/Music';
import Test from './Pages/Test';
import Isometric from './Pages/Isometric';
import { AnimatePresence } from 'framer-motion';
function App() {
const location =  useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />} />
        <Route
          path="/projects/pathfinding"
          element={<Pathfinding />}
        />
        <Route path="/projects/music" element={<Music />} />
        <Route path="experiments/earth" element={<World />} />
        <Route path="/experiments/planets" element={<Test />} />
        <Route path="/experiments/isometric" element={<Isometric />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
