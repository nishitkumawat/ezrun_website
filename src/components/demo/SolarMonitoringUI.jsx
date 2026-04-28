import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Settings,
  Sun,
  Zap,
  IndianRupee,
  CloudSun,
  MapPin,
  Thermometer,
  Play,
  Square,
  Activity,
  CheckCircle2,
  Clock,
  Menu,
  X,
  Bell,
  Edit3,
  Trash2,
  Moon
} from "lucide-react";

export default function SolarMonitoringUI() {
  const [isSending, setIsSending] = useState(false);
  const [washState, setWashState] = useState("IDLE"); // 'IDLE' | 'RUNNING'
  const [toastMsg, setToastMsg] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  const [showSettings, setShowSettings] = useState(false);
  
  const currentHour = new Date().getHours();
  const isNight = currentHour < 6 || currentHour >= 19;

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleWash = () => {
    if (isSending) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setWashState("RUNNING");
      showToast("WASH Command Sent ✅");
    }, 800);
  };

  const handleStop = () => {
    if (isSending) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setWashState("IDLE");
      showToast("STOP Command Sent 🛑");
    }, 800);
  };

  // Fake Data
  const currentPower = 8540;
  const periodYield = 42.5; // kW
  const avgEnergy = 450.5; // Wh
  const moneySaved = 2550.0;
  const temperature = 32.5;
  const location = "Ahmedabad, Gujarat";
  const todayYield = 42500; // Wh

  const chartData = [
    { time: '06:00', power: 0 },
    { time: '07:00', power: 850 },
    { time: '08:00', power: 2400 },
    { time: '09:00', power: 4800 },
    { time: '10:00', power: 7200 },
    { time: '11:00', power: 8900 },
    { time: '12:00', power: 9800 },
    { time: '13:00', power: 9600 },
    { time: '14:00', power: 8540 },
    { time: '15:00', power: 6500 },
    { time: '16:00', power: 4200 },
    { time: '17:00', power: 1800 },
    { time: '18:00', power: 400 },
    { time: '19:00', power: 0 },
  ];

  const maxPower = 10000;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden font-sans text-[#2C3E50]">
      {/* Scrollable Content */}
      <div className={`h-full w-full overflow-y-auto no-scrollbar pb-10 relative ${isNight ? 'bg-[#0A192F]' : 'bg-[#2F80ED]'} transition-colors duration-1000`}>
        {/* Header */}
      <div className="pt-8 px-4 flex items-center justify-between text-white relative z-20">
        <div className="flex items-center gap-3">
          <Menu size={24} className="text-white" />
          <div>
            <h1 className="text-[16px] font-bold tracking-wide">Device 1</h1>
            <p className="text-[11px] text-white/70">4CSNISHITKUMAWAT</p>
          </div>
        </div>
        <button onClick={() => setShowSettings(true)} className="p-2 -mr-2">
          <Settings size={22} className="text-white" />
        </button>
      </div>

      {/* Weather Hero Section */}
      <div className="relative h-[330px] w-full mt-2">
        {/* Dynamic Sky Background */}
        <div className={`absolute inset-0 bg-gradient-to-b ${isNight ? 'from-[#0A192F] to-[#1A3A5C]' : 'from-[#56CCF2] to-[#2F80ED]'} z-0 rounded-b-[40px] opacity-0`}></div>
        
        {/* Sky Elements */}
        {isNight ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 z-0">
            <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
            <div className="absolute top-24 right-16 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-8 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
            <svg viewBox="0 0 400 200" className="w-full h-full text-white fill-current">
              <path d="M 40,90 Q 50,70 70,80 Q 90,70 100,90 Q 110,110 80,110 L 50,110 Q 30,110 40,90 Z" />
              <path d="M 280,60 Q 290,40 310,50 Q 330,40 340,60 Q 350,80 320,80 L 290,80 Q 270,80 280,60 Z" className="opacity-70" />
            </svg>
          </div>
        )}

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-10">
          <p className="text-white/80 text-[11px] font-medium mb-0.5 shadow-sm">Production Today</p>
          <p className="text-white text-[18px] font-black drop-shadow-md">{(todayYield / 1000).toFixed(1)} kWh</p>
        </div>

        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <div className="bg-black/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            {isNight ? <Moon size={14} className="text-white" /> : <CloudSun size={14} className="text-white" />}
            <span className="text-white text-[11px] font-medium tracking-wide">{isNight ? "Clear Night" : "Sunny"}</span>
          </div>
        </div>

        <div className="absolute top-16 right-4 z-10">
          <div className="bg-black/25 backdrop-blur-md border-[1.5px] border-white/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <Thermometer size={16} className="text-white" />
            <span className="text-white text-[18px] font-bold">{temperature}°C</span>
          </div>
        </div>

        <div className="absolute top-16 left-4 z-10">
          <div className="bg-black/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <MapPin size={12} className="text-white" />
            <span className="text-white text-[11px] font-medium tracking-wide">{location}</span>
          </div>
        </div>

        {/* Center Power Circle */}
        <div className="absolute top-[110px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-[150px] h-[150px] flex items-center justify-center">
            {/* Outer animated rings */}
            {washState === "RUNNING" && (
              <>
                <div className="absolute inset-0 border-2 border-[#58B7FF] rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-2 border-2 border-[#58B7FF] rounded-full animate-ping opacity-40" style={{animationDelay: '0.2s'}}></div>
              </>
            )}
            
            {/* Main Circle */}
            <div className={`absolute inset-3 rounded-full bg-gradient-to-br ${isNight ? 'from-[#0B1E36] to-[#1A3A5C]' : 'from-[#1A3A5C] to-[#2C3E50]'} border-[3px] border-[#58B7FF]/60 shadow-[0_0_25px_rgba(88,183,255,0.4)] flex flex-col items-center justify-center`}>
              <span className="text-[#58B7FF] text-[9px] font-bold tracking-[0.2em] mb-0.5">CURRENT POWER</span>
              <div className="flex items-end gap-1">
                <span className="text-white text-[34px] font-black leading-none drop-shadow-md">{currentPower}</span>
                <span className="text-white/70 text-[14px] font-bold mb-1">W</span>
              </div>
            </div>
          </div>
        </div>

        {/* House Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] z-10 overflow-hidden flex justify-center items-end opacity-90">
          <svg viewBox="0 0 400 120" className="w-full h-full object-cover">
            {/* Background Hills */}
            <path d="M-50,120 Q50,60 180,120 Z" className={isNight ? "fill-[#0B1E36]/40" : "fill-[#2C3E50]/20"} />
            <path d="M220,120 Q320,50 450,120 Z" className={isNight ? "fill-[#0B1E36]/50" : "fill-[#2C3E50]/30"} />
            
            {/* House Body */}
            <rect x="140" y="60" width="120" height="60" className={isNight ? "fill-[#1A3A5C]" : "fill-white/80"} />
            
            {/* Roof with Solar Panels */}
            {/* Left Panel */}
            <polygon points="135,60 190,20 200,60" className={isNight ? "fill-[#0A192F]" : "fill-[#1A3A5C]"} />
            <polygon points="142,56 185,25 192,35 152,62" className="fill-[#58B7FF] opacity-90" />
            <line x1="148" y1="58" x2="188" y2="30" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="165" y1="40" x2="175" y2="55" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            
            {/* Right Panel */}
            <polygon points="200,60 210,20 265,60" className={isNight ? "fill-[#0A192F]" : "fill-[#1A3A5C]"} />
            <polygon points="208,35 215,25 258,56 248,62" className="fill-[#58B7FF] opacity-90" />
            <line x1="212" y1="30" x2="252" y2="58" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="225" y1="55" x2="235" y2="40" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />

            {/* Middle Roof part */}
            <polygon points="190,20 200,12 210,20 200,60" className={isNight ? "fill-[#05101E]" : "fill-[#102A43]"} />
            
            {/* Door & Windows */}
            <rect x="185" y="80" width="30" height="40" className={isNight ? "fill-[#0B1E36]" : "fill-[#2C3E50]/80"} />
            <rect x="155" y="75" width="18" height="18" className={isNight ? "fill-[#F2C94C]/80" : "fill-[#1A3A5C]/40"} />
            <rect x="227" y="75" width="18" height="18" className={isNight ? "fill-[#F2C94C]/80" : "fill-[#1A3A5C]/40"} />
            
            {/* Window Frames */}
            <line x1="164" y1="75" x2="164" y2="93" stroke={isNight ? "#1A3A5C" : "white"} strokeWidth="1" />
            <line x1="155" y1="84" x2="173" y2="84" stroke={isNight ? "#1A3A5C" : "white"} strokeWidth="1" />
            <line x1="236" y1="75" x2="236" y2="93" stroke={isNight ? "#1A3A5C" : "white"} strokeWidth="1" />
            <line x1="227" y1="84" x2="245" y2="84" stroke={isNight ? "#1A3A5C" : "white"} strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#F5F7FA] rounded-t-[24px] pt-5 px-4 pb-10 min-h-screen relative z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        
        {/* Period Selector */}
        <div className="flex justify-between items-center mb-5">
          <div className="bg-white border border-gray-100 shadow-sm rounded-[14px] p-1 flex">
            {['day', 'month', 'year'].map(p => (
              <button 
                key={p}
                onClick={() => setSelectedPeriod(p)}
                className={`px-4 py-1.5 rounded-xl text-[12px] font-bold capitalize transition-all ${selectedPeriod === p ? 'bg-[#1E88E5] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="bg-white border border-gray-100 shadow-sm px-3 py-1.5 rounded-[12px] flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#2C3E50]">Today</span>
            <ChevronLeft size={14} className="text-gray-400 rotate-270" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Yield */}
          <div className="bg-white rounded-[18px] p-4 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center shrink-0">
              <Sun size={20} className="text-[#1E88E5]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500">Yield</p>
              <p className="text-[16px] font-black text-[#2C3E50]">{periodYield} kW</p>
            </div>
          </div>
          
          {/* Avg Energy */}
          <div className="bg-white rounded-[18px] p-4 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center shrink-0">
              <Zap size={20} className="text-[#1E88E5]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500">Avg Energy</p>
              <p className="text-[16px] font-black text-[#2C3E50]">{avgEnergy} Wh</p>
            </div>
          </div>

          {/* Saved Money */}
          <div className="bg-white rounded-[18px] p-4 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#27AE60]/10 flex items-center justify-center shrink-0">
              <IndianRupee size={20} className="text-[#27AE60]" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500">Saved Money</p>
              <p className="text-[16px] font-black text-[#27AE60]">₹{moneySaved}</p>
            </div>
          </div>

          {/* Weather Details */}
          <div className="bg-white rounded-[18px] p-4 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center shrink-0">
              <CloudSun size={20} className="text-[#1E88E5]" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold text-gray-500 truncate">Weather</p>
              <p className="text-[16px] font-black text-[#2C3E50] truncate">{temperature}°C</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button 
            onClick={handleWash}
            className="flex-1 bg-[#1E88E5] hover:bg-[#1565C0] text-white py-3.5 rounded-[16px] shadow-[0_6px_16px_rgba(30,136,229,0.3)] flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            {isSending && washState !== "RUNNING" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <Play size={18} fill="currentColor" />
                <span className="font-bold text-[14px]">START WASH</span>
              </>
            )}
          </button>
          
          <button 
            onClick={handleStop}
            className="flex-1 bg-white border-2 border-[#E74C3C]/30 text-[#E74C3C] py-3.5 rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2 transition-all active:scale-95 hover:bg-[#E74C3C]/5"
          >
            <Square size={18} fill="currentColor" />
            <span className="font-bold text-[14px]">STOP</span>
          </button>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-[22px] p-5 border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-[10px] bg-[#1E88E5]/10 flex items-center justify-center">
              <Activity size={18} className="text-[#1E88E5]" />
            </div>
            <h3 className="text-[15px] font-black text-[#2C3E50]">Power generation</h3>
          </div>
          
          {/* Simple CSS Chart Simulation */}
          <div className="h-[220px] relative w-full flex items-end justify-between pt-4 pb-6">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
              {[10000, 7500, 5000, 2500, 0].map((val, i) => (
                <div key={i} className="flex items-center w-full">
                  <span className="text-[9px] text-gray-400 w-8 text-right mr-2">{val > 0 ? (val/1000) + 'k' : 0}</span>
                  <div className="flex-1 border-t border-dashed border-gray-200"></div>
                </div>
              ))}
            </div>

            {/* Bars/Area simulation */}
            <div className="absolute inset-0 flex items-end justify-between pl-10 pr-2 pb-6">
              {/* SVG Area simulation */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.0"/>
                  </linearGradient>
                </defs>
                <path 
                  d={`M0,100 ${chartData.map((d, i) => `L${(i / (chartData.length - 1)) * 100},${100 - (d.power / maxPower) * 100}`).join(' ')} L100,100 Z`}
                  fill="url(#chartGradient)"
                />
                <path 
                  d={`M0,100 ${chartData.map((d, i) => `L${(i / (chartData.length - 1)) * 100},${100 - (d.power / maxPower) * 100}`).join(' ')}`}
                  fill="none"
                  stroke="#1E88E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* X Axis Labels */}
            <div className="absolute bottom-0 left-10 right-2 flex justify-between">
              {['06:00', '10:00', '14:00', '18:00'].map(time => (
                <span key={time} className="text-[9px] text-gray-400">{time}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Last Wash Details */}
        <h3 className="text-[16px] font-black text-[#2C3E50] mb-4">Last Wash Details</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Before Wash */}
          <div className="bg-white rounded-[20px] p-4 border border-gray-100 shadow-[0_6px_16px_rgba(0,0,0,0.03)] text-center">
            <div className="w-12 h-12 rounded-full bg-[#5DADE2]/10 flex items-center justify-center mx-auto mb-3">
              <Activity size={20} className="text-[#5DADE2]" />
            </div>
            <p className="text-[#5DADE2] font-bold text-[13px] mb-4">Before Wash</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Day</p>
                <p className="text-[13px] font-black text-[#2C3E50]">42.5 kWh</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Month</p>
                <p className="text-[13px] font-black text-[#2C3E50]">1275 kWh</p>
              </div>
            </div>
          </div>

          {/* After Wash */}
          <div className="bg-white rounded-[20px] p-4 border border-gray-100 shadow-[0_6px_16px_rgba(0,0,0,0.03)] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#27AE60]/5 rounded-bl-[40px] -z-10"></div>
            
            <div className="w-12 h-12 rounded-full bg-[#27AE60]/10 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={20} className="text-[#27AE60]" />
            </div>
            <p className="text-[#27AE60] font-bold text-[13px] mb-4">After Wash</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Day</p>
                <p className="text-[13px] font-black text-[#2C3E50]">51.0 kWh</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Month</p>
                <p className="text-[13px] font-black text-[#2C3E50]">1530 kWh</p>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <p className="text-[9px] text-[#27AE60] font-bold">SAVING (MONTH)</p>
                <p className="text-[11px] font-black text-[#27AE60]">255kW || ₹ 2550</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

      {/* Settings Bottom Sheet Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-black/60 z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-50 p-6 shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[20px] font-black text-[#102A43]">Settings</h2>
                <button onClick={() => setShowSettings(false)} className="p-2 bg-gray-100 rounded-full text-gray-500">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2">
                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors text-left group">
                  <div className="w-10 h-10 rounded-full bg-[#1E88E5]/10 flex items-center justify-center text-[#1E88E5] group-hover:scale-110 transition-transform">
                    <Bell size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E50]">Alerts</h3>
                    <p className="text-[12px] text-gray-500">View recent notifications and warnings</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors text-left group">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:scale-110 transition-transform">
                    <Edit3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C3E50]">Edit device name</h3>
                    <p className="text-[12px] text-gray-500">Device 1</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-4 p-4 hover:bg-red-50 rounded-2xl transition-colors text-left group">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <Trash2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-500">Delete device</h3>
                    <p className="text-[12px] text-red-400/80">Remove this device from your account</p>
                  </div>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-[14px] font-bold text-[#2C3E50] mb-4">Cleaning Schedule</h3>
                <div className="flex items-center gap-3 bg-[#F5F7FA] p-4 rounded-2xl border border-gray-200">
                  <Clock size={20} className="text-[#1E88E5]" />
                  <div className="flex-1">
                    <span className="text-[14px] text-gray-600">Interval (hours)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="text" defaultValue="24" className="w-12 bg-white border border-gray-300 rounded-lg text-center py-1 font-bold text-[#2C3E50] outline-none" />
                    <button onClick={() => {
                      showToast("Timer Set to 24 hrs");
                      setShowSettings(false);
                    }} className="text-[#1E88E5] font-bold text-[14px] px-2">SET</button>
                  </div>
                </div>
              </div>
              
              <div className="h-8"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Overlay */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#334E68] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-50 whitespace-nowrap"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
