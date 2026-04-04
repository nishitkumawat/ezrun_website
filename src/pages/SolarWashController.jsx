import React from "react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import {
  Smartphone,
  Zap,
  Wifi,
  Clock,
  Droplets,
  BatteryCharging,
  Calendar,
  Watch,
  PlayCircle,
  Layout,
} from "lucide-react";

const SolarWashController = () => {
  const whatsappMsg = encodeURIComponent(
    "I am interested in the Smart Solar Panel Wash Controller. Please provide more details.",
  );
  const whatsappUrl = `https://wa.me/919974486076?text=${whatsappMsg}`;

  const features = [
    {
      icon: Droplets,
      title: "Auto Cleaning",
      desc: "Automatically cleans solar panels at the right time.",
    },
    {
      icon: Clock,
      title: "Saves Time",
      desc: "Reduces manual effort and cleaning time.",
    },
    {
      icon: Zap,
      title: "Improves Power",
      desc: "Increases electricity generation by keeping panels clean.",
    },
    {
      icon: Wifi,
      title: "Offline Capable",
      desc: "Works perfectly even without internet connection.",
    },
    {
      icon: BatteryCharging,
      title: "Power Safe",
      desc: "Remembers settings even after power cuts.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <BackgroundPaths>
        <section className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-10 pt-6 lg:pb-20 lg:pt-10">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Zap className="w-4 h-4" /> Boost Solar Efficiency
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Smart <span className="text-primary">Solar Panel Wash</span>{" "}
              Controller
            </h1>
            {/* Desktop Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed hidden md:block">
              Automatic solar panel cleaning system designed to improve your solar
              efficiency and reduce manual effort. Our state-of-the-art
              automation ensures your solar panels remain spotlessly clean for
              maximum generation.
            </p>
            {/* Mobile Description */}
            <p className="text-[17px] text-muted-foreground mb-8 max-w-xl leading-relaxed block md:hidden">
              Automatic solar panel cleaning to maximize efficiency with zero manual effort.
            </p>
            <div className="bg-card border shadow-xl rounded-2xl p-6 max-w-[420px] mt-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 bg-primary h-full" />
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Direct Price</span>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold">Bulk Discounts Available</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">₹1,699</span>
                <span className="text-sm font-semibold text-muted-foreground">/ unit</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 font-medium">* Price negotiable to ₹1,399 for bulk orders</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <InteractiveHoverButton
                    text="Send Inquiry"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                    className="flex-1 bg-primary text-primary-foreground border-none font-semibold h-12 shadow-lg hover:shadow-primary/25"
                  />
                  <InteractiveHoverButton
                    text="Details"
                    className="flex-1 bg-background text-foreground border shadow-sm font-semibold h-12 hover:bg-muted/50"
                    onClick={() =>
                      (window.location.href = "/product/solar-wash-controller/manual")
                    }
                  />
                </div>
                <InteractiveHoverButton
                  text="Live App Demo"
                  className="w-full bg-[#102A43] text-white border-none font-semibold h-12 shadow-md hover:bg-[#102a43]/90"
                  onClick={() =>
                    (window.location.href = "/app-demo/solar")
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-20 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <img
                src="/assets/solar.jpeg"
                alt="Solar Wash Controller"
                className="relative w-full max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] rounded-[2rem] border-[8px] border-white/60 shadow-xl"
              />
            </div>
          </div>
        </section>
      </BackgroundPaths>

      {/* Cleaning Options */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Cleaning Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5" /> Scheduled Cleaning
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Ideal for regular, fixed cleaning routines.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Choose which days to clean</li>
                <li>• Set start time</li>
                <li>• Set cleaning duration</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <Watch className="w-5 h-5" /> Interval Cleaning
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Best for dusty or industrial areas.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Every 12 hours</li>
                <li>• Every 24 hours</li>
                <li>• Custom time interval</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-card border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <PlayCircle className="w-5 h-5" /> Manual Cleaning
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Useful for emergency or extra cleaning.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Start/Stop anytime from mobile</li>
                <li>• Doesn't disturb schedules</li>
                <li>• Works without internet</li>
              </ul>
            </div>
          </div>
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

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Why You Need This?
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

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="bg-primary/95 backdrop-blur-sm rounded-[40px] p-12 text-center text-white space-y-6 shadow-2xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Bulk Orders & Custom Needs
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Special pricing for bulk orders. Suitable for large solar
            installations with custom cleaning schedules available.
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

export default SolarWashController;
