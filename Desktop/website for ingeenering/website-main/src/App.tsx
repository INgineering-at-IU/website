import './App.css';
import { Routes, Route } from 'react-router-dom';

import JoinPage from './pages/Join';
import HomePage from './pages/Home';
import ExecPage from './pages/ExecBoard';
import EventPage from './pages/Events';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/exec" element={<ExecPage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
  );
}

export default App;
