import React from "react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import {
  Smartphone,
  ShieldCheck,
  Wifi,
  Key,
  RotateCcw,
  MessageSquare,
  Layout,
} from "lucide-react";

const ShutterProduct = () => {
  const whatsappMsg = encodeURIComponent(
    "I am interested in the Advanced Shutter Controller. Please provide more details.",
  );
  const whatsappUrl = `https://wa.me/919974486076?text=${whatsappMsg}`;

  const features = [
    {
      icon: Smartphone,
      title: "Dual Control",
      desc: "Operate via Android app or physical keypad.",
    },
    {
      icon: Wifi,
      title: "WiFi Enabled",
      desc: "Remote operation via 2.4GHz WiFi network.",
    },
    {
      icon: Key,
      title: "PIN Security",
      desc: "Secure password protection for manual operation.",
    },
    {
      icon: ShieldCheck,
      title: "1-Year Warranty",
      desc: "Industrial grade reliability with full support.",
    },
    {
      icon: RotateCcw,
      title: "Easy Reset",
      desc: "Quick reconfiguration and device reset options.",
    },
  ];

  return (
    <div className="flex flex-col py-0 gap-0">
      {/* Hero Section */}
      <BackgroundPaths>
        <section className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-10 pt-6 lg:pb-20 lg:pt-10">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" /> Best in Class Security
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Advanced <span className="text-primary">Shutter</span> Controller
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The ultimate solution for industrial and residential rolling
              shutters. Experience the perfect blend of physical security and
              mobile convenience.
            </p>
            <div className="bg-card border shadow-xl rounded-2xl p-6 max-w-[420px] mt-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 bg-primary h-full" />
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Direct Price</span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">Standard Device</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">₹3,000</span>
                <span className="text-sm font-semibold text-muted-foreground">+ Taxes</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 font-medium">* Complete set with access points included.</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <InteractiveHoverButton
                    text="Send Inquiry"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="flex-1 bg-primary text-primary-foreground border-none font-semibold h-12 shadow-lg hover:shadow-primary/25"
                  />
                  <InteractiveHoverButton
                    text="Manual"
                    className="flex-1 bg-background text-foreground border shadow-sm font-semibold h-12 hover:bg-muted/50"
                  />
                </div>
                <InteractiveHoverButton
                  text="Live App Demo"
                  className="w-full bg-[#102A43] text-white border-none font-semibold h-12 shadow-md hover:bg-[#102a43]/90"
                  onClick={() =>
                    (window.location.href = "/app-demo/shutter")
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-20 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <img
                src="/assets/shutter.png"
                alt="Shutter App"
                className="relative w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] rounded-[2rem] border-[8px] border-white/60 shadow-xl"
              />
            </div>
          </div>
        </section>
      </BackgroundPaths>

      {/* Technical Specifications */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <Wifi className="w-5 h-5" /> Connectivity
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 2.4GHz WiFi Support</li>
                <li>• Access Point: 'Shutter_AP'</li>
                <li>• Config IP: 192.168.4.1</li>
                <li>• 16-character Unique Device ID</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <Key className="w-5 h-5" /> Keypad Controls
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <b>A:</b> Open Shutter
                </li>
                <li>
                  • <b>B:</b> Stop
                </li>
                <li>
                  • <b>C:</b> Close Shutter
                </li>
                <li>
                  • <b>#:</b> Start Password Entry
                </li>
                <li>
                  • <b>*:</b> Confirm Entry
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <RotateCcw className="w-5 h-5" /> Maintenance
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 5s Hold 'D' for Factory Reset</li>
                <li>• Over-the-air updates support</li>
                <li>• Status LED Indicators</li>
                <li>• Industrial Grade Build</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Why Choose EzRun?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-card border shadow-sm rounded-2xl hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:-translate-y-1 transition-transform">
                <f.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">{f.title}</h4>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Overview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Layout className="w-8 h-8 text-primary" /> Product Overview
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Motor Box */}
            <div className="relative group max-w-sm">
              <img
                src="/assets/motor_box.png"
                alt="EzRun Shutter Motor Box"
                className="w-full h-auto object-contain max-h-[400px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* App Interface */}
            <div className="relative group max-w-sm rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-black">
              <img
                src="/assets/motor.jpeg"
                alt="EzRun Shutter App Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="bg-primary/95 backdrop-blur-sm rounded-[40px] p-12 text-center text-white space-y-6 shadow-2xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Secure your industrial premises today
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Join hundreds of industrial and residential users who trust EzRun
            for their rolling shutter security.
          </p>
          <div className="flex justify-center pt-4">
            <InteractiveHoverButton
              text="Contact for Bulk Orders"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="h-14 w-72 bg-white text-primary hover:bg-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShutterProduct;
