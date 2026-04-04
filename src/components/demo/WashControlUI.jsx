import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  RotateCw,
  Trash2,
  Power,
  Square,
  SlidersHorizontal,
  Clock,
  Info,
} from "lucide-react";

const COLORS = {
  bg: "#F0F4F8",
  primary: "#102A43",
  accent: "#FF9F43",
  text: "#334E68",
  card: "#FFFFFF",
};

export default function WashControlUI() {
  const [washState, setWashState] = useState("IDLE"); // 'IDLE' | 'RUNNING'
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("WEEKLY"); // 'WEEKLY' | 'INTERVAL'
  const [selectedDays, setSelectedDays] = useState(new Set(["MON", "WED"]));
  const [duration, setDuration] = useState(5);
  const [intervalLabel, setIntervalLabel] = useState("Every 12 hours");
  const [isAutoWash, setIsAutoWash] = useState(true);
  const [toastMsg, setToastMsg] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
  const WEEK_DAY_KEYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const INTERVAL_OPTS = [
    "Every 12 hours",
    "Every 24 hours",
    "Every 30 hours",
    "Custom",
  ];

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleManualWash = () => {
    if (washState === "RUNNING") {
      setWashState("IDLE");
      setProgress(0);
      showToast("Wash stopped.");
    } else {
      setWashState("RUNNING");
      setProgress(0);
      showToast("Starting quick 5 min wash...");
    }
  };

  // Simulate progress when running
  useEffect(() => {
    let interval;
    if (washState === "RUNNING") {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0; // loops indefinitely for demo
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [washState]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      showToast("Data Refreshed.");
    }, 1000);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast(
        mode === "WEEKLY"
          ? "Weekly schedule saved ✅"
          : "Interval schedule saved ✅"
      );
    }, 1500);
  };

  const toggleDay = (key) => {
    setSelectedDays((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div
      className="relative min-h-full pb-10"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#334E68] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-50 whitespace-nowrap"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="pt-10 px-5 pb-4 flex items-start">
        <button className="p-2 -ml-2 text-[#102A43]">
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        <div className="ml-2 flex-grow">
          <h1 className="text-[17px] font-extrabold tracking-wide text-[#102A43]">
            DEVICE AWAT
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="px-1.5 py-0.5 rounded-[4px] bg-[#27AE60]/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60]"></span>
              <span className="text-[#27AE60] text-[9px] font-bold tracking-wider">
                ONLINE
              </span>
            </div>
            <span className="text-[#334E68]/60 text-[11px] font-medium truncate uppercase">
              OOCNISHITKUMA...
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <button onClick={handleRefresh} className="text-[#334E68]">
            <RotateCw
              size={18}
              strokeWidth={2.5}
              className={isRefreshing ? "animate-spin" : ""}
            />
          </button>
          <button className="text-red-400">
            <Trash2 size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="px-5 space-y-4 pb-20">
        {/* Wash In Progress Component */}
        <AnimatePresence>
          {washState === "RUNNING" && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              className="bg-gradient-to-br from-[#FF9F43] to-[#FF8C1A] rounded-2xl p-5 shadow-[0_8px_20px_rgba(255,159,67,0.3)] text-white overflow-hidden"
            >
              <div className="flex justify-between items-center text-xs font-bold tracking-widest opacity-90 mb-4">
                <span>WASH IN PROGRESS</span>
                <span className="text-lg opacity-80">🧹</span>
              </div>
              <div className="text-[28px] font-black tracking-widest text-center my-2">
                MANUAL RUN
              </div>
              <div className="mt-6 w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Manual Wash Action Card */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center">
          <h2 className="text-[14px] font-bold text-[#102A43] mb-6">
            Instant Manual Wash
          </h2>

          <button
            onClick={handleManualWash}
            className={`relative flex flex-col items-center justify-center w-[110px] h-[110px] rounded-full border-[3px] transition-all duration-300 ${
              washState === "RUNNING"
                ? "border-red-500 shadow-[0_0_24px_rgba(239,68,68,0.3)] bg-red-50/30"
                : "border-[#102A43] shadow-[0_8px_24px_rgba(16,42,67,0.15)] bg-[#F8FAFC]"
            }`}
          >
            {washState === "RUNNING" ? (
              <>
                <Square size={32} className="text-red-500 fill-current mb-1" />
                <span className="text-red-500 font-bold text-sm tracking-wider">
                  STOP
                </span>
              </>
            ) : (
              <>
                <Power
                  size={36}
                  strokeWidth={2.5}
                  className="text-[#102A43] mb-1"
                />
                <span className="text-[#102A43] font-bold text-[13px] tracking-wider">
                  START
                </span>
              </>
            )}
          </button>
          <p className="mt-5 text-[11px] text-[#334E68]/60">
            {washState === "RUNNING"
              ? "Tap to stop immediately"
              : "Tap to start a quick 5 min wash"}
          </p>
        </div>

        {/* Configuration Card */}
        <div className="bg-white rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2.5 mb-5">
            <SlidersHorizontal size={18} className="text-[#FF9F43]" />
            <h2 className="text-[#102A43] text-[17px] font-extrabold">
              Configuration
            </h2>
          </div>

          {/* Mode Tabs */}
          <div className="bg-[#F1F5F9] p-1.5 rounded-xl flex gap-1 mb-6">
            <button
              onClick={() => setMode("WEEKLY")}
              className={`flex-1 py-3 text-[13px] rounded-lg transition-all font-bold ${
                mode === "WEEKLY"
                  ? "bg-white text-[#102A43] shadow-sm"
                  : "text-[#334E68]/60"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setMode("INTERVAL")}
              className={`flex-1 py-3 text-[13px] rounded-lg transition-all font-bold ${
                mode === "INTERVAL"
                  ? "bg-white text-[#102A43] shadow-sm"
                  : "text-[#334E68]/60"
              }`}
            >
              Interval
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[220px]">
            {mode === "WEEKLY" ? (
              <motion.div
                key="weekly"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-[10px] tracking-[1.5px] font-bold text-gray-400 mb-3 uppercase">
                    START TIME
                  </h3>
                  <div className="flex justify-between items-center border border-gray-200 rounded-2xl p-4">
                    <span className="text-[22px] font-black text-[#102A43]">
                      6:00 AM
                    </span>
                    <Clock size={20} className="text-[#FF9F43]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] tracking-[1.5px] font-bold text-gray-400 mb-3 uppercase">
                    REPEAT ON
                  </h3>
                  <div className="flex justify-between">
                    {WEEK_DAYS.map((d, i) => {
                      const key = WEEK_DAY_KEYS[i];
                      const active = selectedDays.has(key);
                      return (
                        <button
                          key={i}
                          onClick={() => toggleDay(key)}
                          className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                            active
                              ? "bg-[#102A43] text-white border-transparent"
                              : "bg-transparent text-[#334E68] border border-gray-200"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="interval"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-[10px] tracking-[1.5px] font-bold text-gray-400 mb-3 uppercase">
                    REPEAT FREQUENCY
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {INTERVAL_OPTS.map((opt) => {
                      const active = intervalLabel === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => setIntervalLabel(opt)}
                          className={`py-3.5 px-2 rounded-xl text-[12px] font-bold transition-all border ${
                            active
                              ? "bg-[#102A43]/5 border-[#102A43] text-[#102A43]"
                              : "border-gray-200 text-[#334E68]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Slider Config (Shared) */}
            <div className="mt-8 mb-6">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-[10px] tracking-[1.5px] font-bold text-gray-400 uppercase">
                  WASH DURATION
                </h3>
                <span className="text-[15px] font-black text-[#102A43]">
                  {duration} min
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full accent-[#FF9F43] h-[6px] bg-[#FF9F43]/20 rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between w-full px-1 mt-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#FF9F43]/40" />
                ))}
              </div>
            </div>

            {/* SAVE BUTTON */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="w-full bg-[#102A43] hover:bg-[#102A43]/90 text-white rounded-2xl py-4 text-[13px] font-bold tracking-[1px] shadow-[0_4px_14px_rgba(16,42,67,0.3)] transition-all flex items-center justify-center"
            >
              {isSaving ? (
                <RotateCw size={18} className="animate-spin" />
              ) : (
                "SAVE & SYNC"
              )}
            </button>
          </div>
        </div>

        {/* Active Config Summary */}
        <div className="bg-[#102A43]/5 border border-[#102A43]/10 rounded-2xl p-4 flex gap-3">
          <Info size={18} className="text-[#102A43] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[9px] font-black text-[#102A43] tracking-widest mb-1">
              ACTIVE CONFIGURATION
            </h3>
            <p className="text-[12px] text-[#334E68] leading-tight font-medium">
              {isAutoWash
                ? mode === "WEEKLY"
                  ? `Scheduled weekly on ${Array.from(selectedDays).join(
                      ", "
                    )} at 6:00 AM`
                  : `Scheduled ${intervalLabel.toLowerCase()}`
                : "Automatic Wash is currently OFF"}
              <br />
              Duration: {duration} min
            </p>
          </div>
        </div>

        {/* Auto Wash Toggle */}
        <div className="bg-white rounded-[20px] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-extrabold text-[#102A43]">
              Automatic Wash
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAutoWash}
                onChange={() => setIsAutoWash(!isAutoWash)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF9F43]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
