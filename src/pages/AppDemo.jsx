import React from "react";
import WashControlUI from "../components/demo/WashControlUI";
import { BackgroundPaths } from "../components/ui/background-paths";

export default function AppDemo() {
  return (
    <div className="min-h-screen bg-background relative flex flex-col items-center justify-center py-12 md:py-20 lg:py-24">
      <BackgroundPaths />

      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left Text Block */}
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
            Live Interactive Demo
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Experience the <span className="text-primary">EzRun App</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Try our interactive demo to see how easy it is to control your solar
            washing systems and shutters. Set smart schedules, monitor devices,
            and automate your world right from your phone.
          </p>
          <div className="hidden lg:block pt-8">
            <p className="text-sm font-medium text-muted-foreground/60 italic">
              * This is a 1:1 web simulation of our mobile application.
            </p>
          </div>
        </div>

        {/* Device Frame */}
        <div className="relative mx-auto rounded-[3rem] border-[12px] md:border-[16px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden w-[340px] md:w-[380px] h-[700px] md:h-[800px] shrink-0 transform hover:-translate-y-2 transition-transform duration-500 ring-1 ring-white/10 group">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 inset-x-0 h-6 w-32 md:w-40 bg-slate-900 rounded-b-3xl mx-auto z-50 flex justify-center items-center gap-2">
            <div className="w-12 h-2 rounded-full bg-[#1e293b]" />
            <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
          </div>

          {/* Frame Reflections */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10 rounded-l-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* App Content */}
          <div className="w-full h-full bg-[#F0F4F8] overflow-y-auto no-scrollbar relative font-sans">
            <WashControlUI />
          </div>
        </div>
      </div>
    </div>
  );
}
