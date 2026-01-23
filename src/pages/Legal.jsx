import React from 'react';

const LegalLayout = ({ title, children }) => (
  <div className="py-20 lg:py-32">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-center">{title}</h1>
      <div className="prose prose-orange max-w-none prose-headings:font-bold prose-p:text-muted-foreground">
        {children}
      </div>
    </div>
  </div>
);

export const Terms = () => (
  <LegalLayout title="Terms & Conditions">
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">1. Acceptance of Terms</h2>
      <p>By accessing and using EzRun Automation products and services, you agree to be bound by these terms. If you do not agree, please refrain from using our services.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">2. Use of Products</h2>
      <p>Our automation products (Shutter Controller, Solar Monitor) must be installed according to the official manual. Misuse or unauthorized modification of hardware may void warranty.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">3. Warranty</h2>
      <p>We provide a 1-year limited warranty on manufacturing defects. This does not cover damages caused by external electrical surges, physical impact, or water damage unless specified for the product.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">4. Connectivity</h2>
      <p>Remote features require a stable 2.4GHz WiFi connection. EzRun is not responsible for service interruptions caused by third-party ISPs.</p>
    </section>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <section className="space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">1. Information Collection</h2>
      <p>We collect minimal data required for device operation, including device status, WiFi SSID (stored locally on device), and optional user feedback names.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">2. Data Usage</h2>
      <p>Your data is used solely to provide automation services and improve app performance. We do not sell your personal information to third parties.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">3. Security</h2>
      <p>We implement industry-standard encryption for communication between your mobile device and our automation hardware.</p>
      
      <h2 className="text-2xl font-bold border-b pb-2">4. App Permissions</h2>
      <p>The EzRun app may require location permissions for WiFi configuration and storage permissions for saving preferences.</p>
    </section>
  </LegalLayout>
);
