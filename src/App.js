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
        <Route path="portfolio" element={<Layout />} />
        <Route
          path="portfolio/projects/pathfinding"
          element={<Pathfinding />}
        />
        <Route path="portfolio/projects/music" element={<Music />} />
        <Route path="portfolio/experiments/earth" element={<World />} />
        <Route path="portfolio/experiments/planets" element={<Test />} />
        <Route path="portfolio/experiments/isometric" element={<Isometric />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
