import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function SolarWashManual() {
  const navigate = useNavigate();
  const manualRef = useRef(null);

  // Helper function to convert oklch to rgb
  const oklchToRgb = (oklch) => {
    if (!oklch || typeof oklch !== 'string') return oklch;
    
    // If it's already RGB or HSL, return as is
    if (!oklch.includes('oklch')) return oklch;

    // Standard Shadcn/Tailwind primary orange fallback (#fb8c00)
    if (oklch.includes('--primary') || oklch.includes('33 100% 49%')) {
      return 'rgb(251, 140, 0)';
    }

    // Try to extract values: oklch(L C H / alpha) or oklch(L C H)
    const match = oklch.match(/oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/);
    
    if (match) {
      const l = parseFloat(match[1]);
      
      // Heuristic: If lightness is high, it's a light color, if low it's dark
      // For the manual, we mostly care about readability (black text vs primary orange)
      if (l > 0.8) return 'rgb(240, 240, 240)'; // Very light gray/white
      if (l < 0.3) return 'rgb(0, 0, 0)';       // Black/Dark
      
      // Default fallback for EzRun brand color if it's in the middle range (like primary)
      return 'rgb(251, 140, 0)';
    }

    return 'rgb(0, 0, 0)'; // Ultimate fallback to black
  };

  const downloadPdf = async () => {
    if (!manualRef.current) return;
    
    const downloadBtn = document.getElementById('downloadPdfBtn');
    try {
      if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerText = 'Generating PDF...';
      }

      // Create a temporary container for processing
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = manualRef.current.offsetWidth + 'px';
      document.body.appendChild(tempContainer);

      // Clone the content
      const contentClone = manualRef.current.cloneNode(true);
      tempContainer.appendChild(contentClone);

      // Process all elements in the clone to replace oklch with RGB
      const originalElements = manualRef.current.querySelectorAll('*');
      const clonedElements = contentClone.querySelectorAll('*');
      
      // Also check the root element of the clone
      const processElement = (el, originalEl) => {
        const styles = window.getComputedStyle(originalEl);
        
        // Properties to check for oklch
        const props = ['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor'];
        
        props.forEach(prop => {
          const value = styles[prop];
          if (value && value.includes('oklch')) {
            el.style[prop] = oklchToRgb(value);
          }
        });

        // Hide elements with 'no-print' class
        if (el.classList.contains('no-print')) {
          el.style.display = 'none';
        }
      };

      // Process root
      processElement(contentClone, manualRef.current);
      
      // Process children
      clonedElements.forEach((el, index) => {
        if (originalElements[index]) {
          processElement(el, originalElements[index]);
        }
      });

      const canvas = await html2canvas(contentClone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: manualRef.current.offsetWidth,
        height: manualRef.current.offsetHeight,
      });

      // Clean up
      document.body.removeChild(tempContainer);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }

      pdf.save('EzRun-Solar-Wash-Controller-Manual.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(`Error generating PDF: ${error.message}`);
    } finally {
      if (downloadBtn) {
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF</span>';
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-6 no-print">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Product
        </Button>
        <Button 
            id="downloadPdfBtn"
            onClick={downloadPdf}
            className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
            >
            <Download className="h-4 w-4" />
            Download PDF
            </Button>
      </div>
      
      <div 
        className="bg-white text-black p-8 md:p-12 rounded-lg shadow-lg border border-gray-200" 
        ref={manualRef}
      >
        {/* Header Section */}
        <div className="border-b-2 border-primary pb-6 mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-bold text-primary m-0 uppercase tracking-wider">EzRun Automation</h2>
            <p className="text-sm text-gray-600 m-0">Smart Solutions for Solar Efficiency</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold m-0">USER MANUAL</h1>
            <p className="text-sm text-gray-600 m-0">Model: CS10A-V1</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-black">
          <h1 className="text-3xl font-extrabold mb-8 text-black border-l-4 border-primary pl-4">
            Smart Solar Panel Wash Controller
          </h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Product Introduction</h2>
            <h3 className="text-xl font-medium mb-2 text-black">Product Name: EzRun Smart Solar Panel Wash Controller</h3>
            <p className="mb-4 text-black">
              <strong>Application:</strong> Automatic solar panel sprinkler cleaning
            </p>
            
            <h4 className="font-semibold mb-2 text-black">Designed for:</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-black">
              <li>Rooftop solar systems</li>
              <li>Residential & commercial installations</li>
              <li>Industrial solar plants (small to medium scale)</li>
            </ul>
            
            <h4 className="font-semibold mb-2 text-black">Purpose:</h4>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>Automatically cleans solar panels at scheduled times</li>
              <li>Reduces dust accumulation</li>
              <li>Improves solar power output</li>
              <li>Eliminates frequent manual cleaning</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. How the EzRun Controller Works</h2>
            <p className="mb-4 text-black">
              The controller connects to a water pump used for solar panel cleaning. Cleaning can be controlled using:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-black">
              <li>Mobile phone (Wi-Fi)</li>
              <li>Automatic schedules</li>
              <li>Manual bypass switch</li>
            </ul>
            <p className="text-black font-medium">Once configured, the system works fully automatically, even without internet.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-2 text-black">Working Flow</h3>
            <ol className="list-decimal pl-6 space-y-2 text-black">
              <li>Controller receives power</li>
              <li>Internal Wi-Fi module runs stored logic</li>
              <li>At scheduled time:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Relay turns ON</li>
                  <li>Pump starts</li>
                  <li>Water flows through sprinklers</li>
                </ul>
              </li>
              <li>After set duration:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Pump turns OFF automatically</li>
                </ul>
              </li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Cleaning Modes</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-black">A. Scheduled Cleaning</h3>
              <p className="mb-3 text-black">Best for fixed and regular cleaning routines.</p>
              <p className="mb-3 text-black font-semibold">User selects:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Cleaning days (example: Monday, Wednesday, Friday)</li>
                <li>Start time</li>
                <li>Cleaning duration</li>
              </ul>
              <p className="mb-2 text-black italic">Automatically repeats every week. No daily setup required.</p>
              <p className="font-medium text-black">Recommended for: <span className="font-normal">Residential rooftops & small solar plants</span></p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-black">B. Interval Cleaning</h3>
              <p className="mb-3 text-black">Designed for dusty or high-pollution areas.</p>
              <p className="mb-3 text-black">Cleaning runs automatically at fixed intervals:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Every 12 hours</li>
                <li>Every 24 hours</li>
                <li>Custom interval (user defined)</li>
              </ul>
              <p className="mb-2 text-black italic">Useful where dust settles quickly.</p>
              <p className="font-medium text-black">Recommended for: <span className="font-normal">Industrial zones, highways, construction areas</span></p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-black">C. Manual Cleaning</h3>
              <p className="mb-3 text-black">Used for emergency or extra cleaning.</p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Start or stop cleaning anytime from mobile</li>
                <li>Does not affect existing schedules</li>
                <li>Can be operated with or without internet</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Supported Pumps & Load Limits</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-green-700">✅ Recommended Pumps (Best for Solar)</h3>
              <h4 className="font-semibold mb-2 text-black">DC Pumps (Highly Recommended)</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>12V DC diaphragm pump</li>
                <li>24V DC diaphragm pump</li>
                <li>DC centrifugal pumps</li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-black">Electrical Limits</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Voltage: 12V / 24V DC</li>
                <li>Power: Up to 150W</li>
                <li>Current: Up to 10A</li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-black">Why DC pumps are best</h4>
              <ul className="list-disc pl-6 space-y-1 text-black">
                <li>Solar-friendly</li>
                <li>Low power consumption</li>
                <li>Safe switching</li>
                <li>Long controller life</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-amber-700">⚠️ AC Pumps (Limited Use Only)</h3>
              <p className="mb-2 text-black">Allowed only for small, low-power pumps:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Fountain pumps</li>
                <li>Aquarium / circulation pumps</li>
                <li>Small RO booster pumps</li>
              </ul>
              
              <h4 className="font-semibold mb-2 text-black">Electrical Limits</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
                <li>Voltage: 230V AC</li>
                <li>Power: Maximum 100W</li>
                <li>No HP rating</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Wi-Fi Setup (AP Mode Configuration)</h2>
            <h3 className="text-xl font-medium mb-3 text-black">First-Time Setup</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-black">
              <li>Power ON the controller</li>
              <li>Controller creates its own Wi-Fi hotspot</li>
              <li>Open mobile Wi-Fi settings</li>
              <li>Connect to EzRun-XXXX network</li>
            </ol>
            
            <h3 className="text-xl font-medium mb-3 text-black">Configuration Steps</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-black">
              <li>Open browser and enter <strong>192.168.4.1</strong></li>
              <li>Select home Wi-Fi network</li>
              <li>Enter password</li>
              <li>Save settings</li>
              <li>Device reboots automatically</li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Reset Button (Pin-Hole Reset)</h2>
            <p className="mb-4 text-black">Reset button is inside a small hole on the enclosure.</p>
            
            <h3 className="text-xl font-medium mb-3 text-black">Used when:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1 text-black">
              <li>Wi-Fi password is forgotten</li>
              <li>Network needs to be changed</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-black">Reset Procedure</h3>
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-black">
              <li>Power ON the controller</li>
              <li>Insert a thin object (pin, SIM ejector)</li>
              <li>Press until click is felt and hold for 10 seconds</li>
              <li>Release button</li>
            </ol>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Bypass Switch (Manual Control)</h2>
            <p className="mb-4 text-black italic">Physical switch provided on the unit. Allows direct pump operation.</p>
            
            <p className="mb-4 text-black">Works even if Wi-Fi is not available or controller is offline.</p>
            
            <ul className="list-disc pl-6 mb-4 space-y-1 text-black">
              <li><strong>Bypass ON:</strong> Pump runs manually (ignores logic)</li>
              <li><strong>Bypass OFF:</strong> Pump controlled by controller & schedules</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Suitable Installation Conditions</h2>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>Indoor or covered outdoor installation</li>
              <li>Dry and shaded location away from direct rain</li>
              <li>Proper ventilation around enclosure</li>
              <li>Stable power supply recommended</li>
            </ul>
          </section>
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500 gap-4">
          <div>
            <p className="font-bold text-gray-700 m-0">EzRun Automation</p>
            <p className="m-0">Ahmedabad, Gujarat, India</p>
          </div>
          <div className="flex flex-col md:items-end">
            <p className="m-0 font-medium">Support: machmate.contact@gmail.com</p>
            <p className="m-0 font-medium">Website: www.ezrun.in</p>
            <p className="m-0 text-xs mt-1">© {new Date().getFullYear()} EzRun Automation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
