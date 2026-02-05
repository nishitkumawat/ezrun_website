import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ShutterProduct from "./pages/ShutterProduct";
import SolarProduct from "./pages/SolarProduct";
import SolarWashController from "./pages/SolarWashController";
import SolarWashManual from "./pages/SolarWashManual";
import Contact from "./pages/Contact";
import { Terms, Privacy } from "./pages/Legal";
import IoTLandingPage from "./pages/IoTLandingPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/shutter" element={<ShutterProduct />} />
          <Route path="/product/solar" element={<SolarProduct />} />
          <Route
            path="/product/solar-wash-controller"
            element={<SolarWashController />}
          />
          <Route
            path="/product/solar-wash-controller/manual"
            element={<SolarWashManual />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/iot" element={<IoTLandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
