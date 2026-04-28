import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import SolarWashManual from "./pages/SolarWashManual";
import Contact from "./pages/Contact";
import { Terms, Privacy, CustomBuildTerms } from "./pages/Legal";
import IoTLandingPage from "./pages/IoTLandingPage";
import AppDemo from "./pages/AppDemo";
import ShutterAppDemo from "./pages/ShutterAppDemo";
import MonitoringAppDemo from "./pages/MonitoringAppDemo";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/product/solar-wash-controller/manual"
            element={<SolarWashManual />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/legal/custom-build-terms"
            element={<CustomBuildTerms />}
          />
          <Route path="/iot" element={<IoTLandingPage />} />
          <Route path="/app-demo/solar" element={<AppDemo />} />
          <Route path="/app-demo/solar-monitoring" element={<MonitoringAppDemo />} />
          <Route path="/app-demo/shutter" element={<ShutterAppDemo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
