import React from "react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
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
    <div className="flex flex-col py-20 gap-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" /> Best in Class Security
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Advanced <span className="text-primary">Shutter</span> Controller
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The ultimate solution for industrial and residential rolling
            shutters. Experience the perfect blend of physical security and
            mobile convenience.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <InteractiveHoverButton
              text="Send Inquiry"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="h-14 w-60"
            />
            <InteractiveHoverButton
              text="Download Manual"
              className="h-14 w-52"
            />
          </div>
          <p className="text-2xl font-bold">Price: ₹ 3000 + Taxes</p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
          <img
            src="/assets/shutter.png"
            alt="Advanced Shutter Controller"
            className="relative rounded-3xl border shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </section>

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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
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
