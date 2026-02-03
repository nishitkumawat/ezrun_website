import React from "react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Sun,
  Droplets,
  Zap,
  ShieldCheck,
  Wifi,
  Globe,
  MessageSquare,
  Layout,
} from "lucide-react";

const SolarProduct = () => {
  const whatsappMsg = encodeURIComponent(
    "I am interested in the AI Based Solar monitoring and washing system. Please provide more details.",
  );
  const whatsappUrl = `https://wa.me/919974486076?text=${whatsappMsg}`;

  const modes = [
    {
      title: "For Offline Mode",
      icon: Wifi,
      desc: "In this mode you don't need any internet connection at the place of solar installation, but you must be within a 100m range. Just turn on your WiFi and connect to the solar hotspot using the ID and password provided in the box. Open the app to see all details. Autowash also works flawlessly in offline mode.",
    },
    {
      title: "For Online Mode",
      icon: Globe,
      desc: "Connect to the solar device via WiFi, enter your home WiFi SSID and password, and specify your solar location. Once connected, you can monitor and trigger washing from any point in the world. Autowash is slightly more accurate in this mode due to cloud-based AI detection.",
    },
  ];

  return (
    <div className="flex flex-col py-20 gap-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Zap className="w-4 h-4" /> Maximum Energy Yield
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Based <span className="text-primary">Solar</span> Monitoring &
            Washing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This is our advanced solar monitoring system which helps you track
            all the information about your solar panels. Maximize your
            investment with real-time tracking and automated maintenance.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <InteractiveHoverButton
              text="Send Inquiry"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="h-14 w-60"
            />
            <InteractiveHoverButton text="Watch Demo" className="h-14 w-52" />
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">Price: ₹ 3500 + Taxes</p>
            <p className="text-sm text-primary font-medium">
              (Negotiable for bulk orders)
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
          <img
            src="/assets/solar.png"
            alt="AI Solar System"
            className="relative rounded-3xl border shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">How it Works?</h2>
            <p className="text-muted-foreground">
              Advanced dust detection algorithms coupled with precision cleaning
              hardware.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Autowash Feature</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The system automatically detects dust accumulation on your solar
                panels. When detected, it will automatically turn on your
                cleaning mechanism. If you don't have a cleaning mechanism
                installed, it will send an instant alert to your device so you
                can clean the solar panels yourself and maintain peak
                efficiency.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Track production metrics, voltage fluctuations, and maintenance
                history. Our AI analyzes performance data to provide deep
                insights into your energy generation and system health,
                accessible from anywhere via our unified app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Modes - Setup */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-16 text-center underline decoration-primary decoration-4 underline-offset-8">
          Setup & Connectivity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modes.map((mode, i) => (
            <div
              key={i}
              className="flex gap-6 p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors duration-300"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white">
                  <mode.icon className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{mode.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {mode.desc}
                </p>
                <div className="mt-4 inline-flex items-center text-xs font-semibold text-primary uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Reliable performance
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Interface Gallery */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Layout className="w-8 h-8 text-primary" /> Smart Washing Interface
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center items-center">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative group rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-black max-w-[300px]"
              >
                <img
                  src={
                    num === 2
                      ? "/assets/wash2.jpeg"
                      : num === 3
                        ? "/assets/wash_3.jpeg"
                        : "/assets/wash_1.jpeg"
                  }
                  alt={`EzRun Solar App Interface ${num}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="bg-primary/95 backdrop-blur-sm rounded-[40px] p-12 text-center text-white space-y-6 shadow-2xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to boost your solar output?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Join hundreds of happy customers using EzRun to keep their solar
            panels clean and efficient.
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

export default SolarProduct;
