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

export const CustomBuildTerms = () => (
  <LegalLayout title="Custom Build - Terms & Conditions">
    <section className="space-y-8 text-slate-300">
      <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-orange-400 mb-2">
          Critical Service Policy
        </h3>
        <p>
          <strong>Service Continuity & Subscription:</strong> Our cloud, app,
          and platform services are bundled with active hardware purchases. If
          you stop purchasing hardware from us, services will continue for a{" "}
          <span className="text-white font-bold">grace period of 3 months</span>
          . After this period, services will be automatically suspended. To
          continue, a yearly subscription plan must be purchased.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          1. Custom Build Disclaimer
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Custom-built devices are designed strictly based on customer-provided
            specifications.
          </li>
          <li>
            EzRun Automation is not responsible for performance issues arising
            from incorrect or incomplete specifications provided by the
            customer.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          2. Demo Model Policy
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Demo models are for functional testing only and are{" "}
            <strong>not the final product</strong>.
          </li>
          <li>
            Demo units are chargeable and <strong>non-refundable</strong>.
          </li>
          <li>
            The PCB and enclosure quality of the demo unit may differ from the
            final bulk production units.
          </li>
          <li>
            Opening the enclosure or tampering with the demo unit may cause
            damage, for which the customer is solely responsible.
          </li>
          <li>
            If the demo model is incompatible with your machine, it cannot be
            returned, only modified (additional charges may apply).
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          3. Bulk Order Policy
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            A minimum order of <strong>20-25 units</strong> is required for
            custom builds.
          </li>
          <li>
            Bulk production commences only after the customer approves the demo
            model.
          </li>
          <li>
            Once bulk production has started, orders cannot be cancelled or
            refunded.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          4. Compatibility & Liability
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The customer is responsible for ensuring the machine's compatibility
            with our automation devices.
          </li>
          <li>
            EzRun Automation is not liable for any damage to the customer's
            machinery during testing or operation.
          </li>
          <li>
            The customer is responsible for compliance with electrical safety
            standards.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          5. Warranty & Support
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Warranty covers manufacturing defects only. It does not cover physical
            damage, wiring errors, voltage surges, or misuse.
          </li>
          <li>No refunds will be issued for custom logic development costs.</li>
          <li>
            Hardware designs and firmware remain the intellectual property of
            EzRun Automation.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          6. Cloud & App Services
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Cloud uptime is subject to the selected plan and 3rd party provider
            stability.
          </li>
          <li>
            We are not liable for data loss caused by third-party server issues.
          </li>
          <li>
            App access may be suspended immediately if the yearly subscription fee
            is not paid.
          </li>
          <li>
            We are not responsible if a custom whitelabeled app is rejected by the
            App Store or Play Store due to policy changes.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">
          7. Legal & Pricing
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            All disputes are subject to the local jurisdiction of EzRun
            Automation's registered office.
          </li>
          <li>
            The company reserves the right to modify features, subscription
            pricing, and terms at any time.
          </li>
          <li>Subscription prices are subject to change upon renewal.</li>
        </ul>
      </div>
    </section>
  </LegalLayout>
);
