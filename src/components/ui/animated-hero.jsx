import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["smart", "reliable", "efficient", "advanced", "modern"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] gap-8 pb-10 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:ml-12">
            <h1 className="text-4xl md:text-7xl max-w-2xl tracking-tighter font-regular">
              <span className="text-secondary-foreground/80">EzRun Automation is</span>
              <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center lg:text-left md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg">
              Empowering your home and business with state-of-the-art automation. 
              From secure shutter controllers to intelligent solar cleaning systems, 
              we make technology work for you.
            </p>

            <div className="flex flex-row gap-3">
              <InteractiveHoverButton 
                text="Explore Products" 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img 
               src="/assets/solar_sprinkler_realistic.png" 
               alt="EzRun Automation" 
               className="relative w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
