import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Wifi, Smartphone, CheckCircle2, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SetupGuide() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="bg-white text-black p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            EzRun Device Setup
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to connect your controller to Wi-Fi and set up the mobile application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Instructions */}
          <div className="space-y-10">
            {/* WiFi Setup Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Wifi className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  SETUP (One Time)
                </h2>
              </div>
              
              <ol className="relative border-l border-gray-200 ml-4 space-y-6">
                {[
                  "Switch on the controller power.",
                  "Press reset button for 5 secs (3 no)",
                  "Wait 30-40 seconds for the system to start.",
                  'Open WiFi settings on your mobile phone and connect to WiFi named "SolarWash_AP".',
                  "Turn OFF mobile data / internet.",
                  "Open Google Chrome browser.",
                  "Type 192.168.4.1 in the address bar and press Enter.",
                  "Enter your Home / Company WiFi name (SSID) and WiFi password. (WiFi must be 2.4GHz only)",
                  "Tap Save."
                ].map((step, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full -left-4 ring-4 ring-white text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 font-medium pt-1 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <hr className="border-gray-100" />

            {/* App Setup Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Application Setup
                </h2>
              </div>
              
              <ol className="relative border-l border-gray-200 ml-4 space-y-6">
                {[
                  'Download "EzRun Controller" app from Google Play Store.',
                  "Install and Open the app.",
                  "Sign up using phone number and password.",
                  "Login after successful signup.",
                  "Enter 14-18 character Device Code.",
                  "Start using the app!"
                ].map((step, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white text-green-600 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <p className="text-gray-700 font-medium pt-1 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Video Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 mb-4 w-full text-gray-800 font-semibold">
                <PlayCircle className="text-red-500 w-5 h-5" />
                Video Guide: WiFi Setup
              </div>
              
              <div className="relative w-full aspect-[9/16] max-w-[320px] mx-auto overflow-hidden rounded-xl bg-black shadow-md border border-gray-200">
                <iframe 
                  src="https://www.youtube.com/embed/pp6MO9kJa2c" 
                  title="WiFi Setup Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
