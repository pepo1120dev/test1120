import { Route, Routes } from 'react-router-dom';
import Comparative from './pages/Comparative.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Records from './pages/Records.jsx';
import Territory from './pages/Territory.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/comparativo" element={<Comparative />} />
    <Route path="/territorio" element={<Territory />} />
    <Route path="/registros" element={<Records />} />
  </Routes>
);

export default App;
