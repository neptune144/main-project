import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pathways from './pages/Pathways';
import Latest from './pages/Latest';
import Colleges from './pages/Colleges';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Latest />} />
        <Route path="/pathways" element={<Pathways />} />
        <Route path="colleges" element={<Colleges />} />
        <Route path="coursespage" element={<CoursesPage />} />
        <Route path="about" element={<AboutPage />} />


  
      </Routes>
    </Router>
  );
}

export default App;
