import React from "react";
import ShutterControlUI from "../components/demo/ShutterControlUI";
import { BackgroundPaths } from "../components/ui/background-paths";

export default function ShutterAppDemo() {
  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(130vh-4rem)] md:min-h-screen bg-background relative flex flex-col items-center justify-center md:py-20 lg:py-24">
      <div className="hidden md:block">
        <BackgroundPaths />
      </div>

      <div className="relative z-10 w-full h-full md:h-auto md:container md:mx-auto md:px-8 flex flex-col lg:flex-row items-center justify-center lg:gap-24">
        {/* Left Text Block */}
        <div className="hidden lg:block max-w-xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />{" "}
            Live Interactive Demo
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Experience the <span className="text-primary">Shutter App</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Try our interactive demo to see how simple it is to operate your
            industrial and residential rolling shutters. Gain secure, reliable control
            right from your phone.
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
          <div className="relative z-10 w-[calc(100vw-20px)] h-[calc(100vh-4rem-20px)] md:w-[300px] md:h-[620px] lg:w-[340px] lg:h-[700px] xl:w-[380px] xl:h-[780px] rounded-[2.2rem] md:rounded-[3rem] border-[10px] md:border-[16px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col">
            
            {/* Punch Hole Camera */}
            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-50 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-900/40 rounded-full flex items-start justify-start">
                 <div className="w-[2px] h-[2px] bg-white rounded-full mt-[1px] ml-[1px] opacity-70" />
              </div>
            </div>

            {/* Frame Reflections */}
            <div className="hidden md:block absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-20 rounded-l-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* App Content */}
            <div className="flex-1 w-full bg-[#F7F9FC] overflow-y-auto no-scrollbar relative font-sans">
              <ShutterControlUI />
            </div>

            {/* Android Navigation Bar */}
            <div className="h-12 w-full bg-black/95 flex items-center justify-around px-8 z-50 shrink-0">
              {/* Back */}
              <button className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              {/* Home */}
              <button className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-white" />
              </button>
              {/* Recents */}
              <button className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-[16px] h-[16px] border-[2.5px] border-white rounded-[4px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
