import React from "react";
import SolarMonitoringUI from "../components/demo/SolarMonitoringUI";
import { BackgroundPaths } from "../components/ui/background-paths";

export default function MonitoringAppDemo() {
  return (
    <div className="md:h-[calc(130vh-4rem)] h-[calc(100vh-4rem)] md:min-h-screen bg-background relative flex flex-col items-center justify-center md:py-20 lg:py-24">
      <div className="hidden md:block">
        <BackgroundPaths />
      </div>

      <div className="relative z-10 w-full h-full md:h-auto md:container md:mx-auto md:px-10  flex flex-col lg:flex-row items-center justify-center lg:gap-24">
        {/* Left Text Block */}
        <div className="hidden lg:block max-w-xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
            Live Interactive Demo
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Experience the <span className="text-primary">EzRun App</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Try our interactive demo to see how easy it is to monitor your solar
            generation and control your washing systems. Track yield, automate schedules,
            and monitor your world right from your phone.
          </p>
          <div className="pt-8">
            <p className="text-sm font-medium text-muted-foreground/60 italic">
              * This is a 1:1 web simulation of our mobile application.
            </p>
          </div>
        </div>

        {/* Device Wrapper */}
        <div className="relative shrink-0 mx-auto transform md:hover:-translate-y-2 transition-transform duration-500 group">
          
          {/* Hardware Buttons */}
          <div className="absolute top-28 -left-[2px] w-[5px] h-10 bg-slate-700 rounded-l-md border border-slate-900 border-r-0 z-0" />
          <div className="absolute top-44 -left-[2px] w-[5px] h-10 bg-slate-700 rounded-l-md border border-slate-900 border-r-0 z-0" />
          <div className="absolute top-36 -right-[2px] w-[5px] h-14 bg-slate-700 rounded-r-md border border-slate-900 border-l-0 z-0" />

          {/* Device Frame */}
          <div className="relative z-10 w-[calc(100vw-20px)] h-[calc(100vh-4rem-20px)] md:w-[320px] md:h-[660px] lg:w-[360px] lg:h-[740px] xl:w-[400px] xl:h-[820px] rounded-[2.2rem] md:rounded-[3rem] border-[10px] md:border-[16px] border-slate-900 bg-[#1A3A5C] shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col">
            
            {/* Punch Hole Camera */}
            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-50 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-900/40 rounded-full flex items-start justify-start">
                 <div className="w-[2px] h-[2px] bg-white rounded-full mt-[1px] ml-[1px] opacity-70" />
              </div>
            </div>

            {/* Frame Reflections */}
            <div className="hidden md:block absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-20 rounded-l-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* App Content */}
            <div className="flex-1 w-full bg-[#1A3A5C] overflow-hidden relative font-sans">
              <SolarMonitoringUI />
            </div>

            {/* Android Navigation Bar */}
            <div className="h-10 bg-black flex items-center justify-center gap-12 z-20">
              <div className="w-4 h-4 border-2 border-white/50 rounded-sm hover:bg-white/10 cursor-pointer transition-colors" />
              <div className="w-4 h-4 border-2 border-white/50 rounded-full hover:bg-white/10 cursor-pointer transition-colors" />
              <div className="w-3 h-3 border-2 border-white/50 rounded-sm hover:bg-white/10 cursor-pointer transition-colors origin-center rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
