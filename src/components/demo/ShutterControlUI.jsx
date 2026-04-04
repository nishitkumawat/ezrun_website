import React, { useState } from "react";
import { Menu, Trash2, ArrowUp, Square, ArrowDown, MonitorSmartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShutterControlUI() {
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
  };

  return (
    <div className="relative min-h-full pb-10 flex flex-col bg-[#F7F9FC] text-[#333333] font-sans h-full">
      {/* Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-50 whitespace-nowrap"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Bar */}
      <div className="flex items-center justify-between px-5 pt-10 pb-2">
        <button className="text-gray-800">
          <Menu size={24} strokeWidth={2} />
        </button>
        <h1 className="text-[20px] font-normal text-gray-800">Device AWAT</h1>
        <button className="text-gray-600 hover:text-gray-800">
          <Trash2 size={24} strokeWidth={1} className="fill-gray-600 text-transparent" />
        </button>
      </div>

      <div className="px-5 flex flex-col gap-6 w-full mt-4">
        {/* Device Info Card */}
        <div className="bg-white rounded-[20px] p-4 flex items-center shadow-sm border border-gray-100">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF6EB] flex items-center justify-center mr-4 shrink-0">
            <MonitorSmartphone className="text-[#FF9F43]" size={28} strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-[#102A43] font-bold text-[16px]">Device AWAT</h2>
            <p className="text-gray-400 text-[11px] uppercase mt-0.5 tracking-wider font-semibold">SSMNISHITKUMAWAT</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full">
          {/* UP Button */}
          <button
            onClick={() => showToast("Opening Shutter...")}
            className="w-full h-[65px] bg-[#FFA000] hover:bg-[#FF8F00] active:scale-95 transition-transform flex items-center justify-center gap-2 rounded-[16px] shadow-sm text-white font-bold text-[17px] tracking-widest border border-[#F57C00]/20"
          >
            <ArrowUp size={22} strokeWidth={2.5} /> UP
          </button>

          {/* STOP Button */}
          <button
            onClick={() => showToast("Shutter Stopped")}
            className="w-full h-[65px] bg-[#9E9E9E] hover:bg-[#8F8F8F] active:scale-95 transition-transform flex items-center justify-center gap-2 rounded-[16px] shadow-sm text-white font-bold text-[17px] tracking-widest border border-gray-400/20"
          >
            <Square size={16} strokeWidth={3} className="fill-white" /> STOP
          </button>

          {/* DOWN Button */}
          <button
            onClick={() => showToast("Closing Shutter...")}
            className="w-full h-[65px] bg-[#EF5350] hover:bg-[#E53935] active:scale-95 transition-transform flex items-center justify-center gap-2 rounded-[16px] shadow-sm text-white font-bold text-[17px] tracking-widest border border-red-600/20"
          >
            <ArrowDown size={22} strokeWidth={2.5} /> DOWN
          </button>
        </div>
      </div>
    </div>
  );
}
