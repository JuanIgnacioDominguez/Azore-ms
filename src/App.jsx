import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startup from './views/startup';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startup />} />
      </Routes>
    </Router>
  );
}

export default App;
