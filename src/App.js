import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import Projects from './pages/Projects';
import KontakKami from './pages/KontakKami';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/kontak-kami" element={<KontakKami />} /> {/* Path to Kontak Kami page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
