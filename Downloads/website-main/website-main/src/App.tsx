import './App.css';
import { Routes, Route } from 'react-router-dom';

import JoinPage from './pages/Join';
import HomePage from './pages/Home';
import ExecPage from './pages/ExecBoard';
import EventPage from './pages/Events';
import PreviousExecPage from './pages/PreviousExecBoard';
import SponsorsPage from './pages/Sponsors';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/exec" element={<ExecPage />} />
        <Route path="/previous-exec" element={<PreviousExecPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
      </Routes>
  );
}

export default App;
