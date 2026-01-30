import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ShutterProduct from './pages/ShutterProduct';
import SolarProduct from './pages/SolarProduct';
import SolarWashController from './pages/SolarWashController';
import Contact from './pages/Contact';
import { Terms, Privacy } from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/shutter" element={<ShutterProduct />} />
          <Route path="/product/solar" element={<SolarProduct />} />
          <Route path="/product/solar-wash-controller" element={<SolarWashController />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
