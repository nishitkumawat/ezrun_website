import React from 'react';
import { Hero } from '@/components/ui/animated-hero';
import { BentoCard } from '@/components/ui/bento-grid';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Sun, Zap, CheckCircle, Droplets } from 'lucide-react';

const features = [
  {
    Icon: Zap,
    name: "Advanced Shutter Controller",
    description: "Secure, PIN and mobile-controlled operation for industrial and home rolling shutters.",
    href: "/product/shutter",
    cta: "View Details",
    background: (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent z-0" />
        <img 
          src="/assets/shutter_transparent.png" 
          
          className="absolute -right-4 -bottom-4 h-48 w-auto object-contain opacity-40 grayscale-[20%] z-10" 
        />
      </>
    ),
    className: "h-auto min-h-[22rem] md:h-[24rem]",
  },
  // {
  //   Icon: Sun,
  //   name: "Solar Monitoring & Washing",
  //   description: "AI-based tracking and automatic washing system to maximize your solar efficiency.",
  //   href: "/product/solar",
  //   cta: "View Details",
  //   background: (
  //     <>
  //       <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent z-0" />
  //       <img 
  //         src="/assets/solar_transparent.png" 
          
  //         className="absolute -right-4 -bottom-4 h-48 w-auto object-contain opacity-40 grayscale-[20%] z-10" 
  //       />
  //     </>
  //   ),
  //   className: "h-auto min-h-[22rem] md:h-[24rem]",
  // },
  {
    Icon: Droplets,
    name: "Smart Solar Wash Controller",
    description: "Automatic solar panel cleaning system to improve efficiency and reduce manual effort without internet.",
    href: "/product/solar-wash-controller",
    cta: "View Details",
    background: (
      <>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent z-0" />
        <img 
          src="/assets/solar_wash_controller.png" 
          
          className="absolute -right-8 -bottom-8 h-56 w-auto object-contain opacity-30 grayscale-[20%] z-10" 
        />
      </>
    ),
    className: "h-auto min-h-[22rem] md:h-[24rem] md:col-span-2 lg:col-span-1",
  },
];

const feedback = [
  { name: "Aarav Patel", location: "Ahmedabad, Gujarat", comment: "The automation is seamless. The shutter controller has made my warehouse management so much easier." },
  { name: "Priya Sharma", location: "Surat, Gujarat", comment: "Solar washing system is a game changer! My yield increased by 20% within the first month." },
  { name: "Vikram Singh", location: "New Delhi", comment: "Exceptional build quality and great customer support. Highly recommended for industrial needs." },
  { name: "Deepak Mehta", location: "Rajkot, Gujarat", comment: "Easy to install and very reliable. The app interface is very user-friendly." },
];

const faqs = [
  { q: "How do I connect the shutter controller to WiFi?", a: "Connect to the device hotspot 'Shutter_AP', navigate to 192.168.4.1, and enter your home WiFi credentials." },
  { q: "Does the solar washing system work offline?", a: "Yes, it works in both offline (hotspot range) and online modes for total flexibility." },
  { q: "What is the warranty period?", a: "We provide a 1-year product warranty on all our automation hardware." },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-0 pb-10 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black">
      {/* Mobile App Download Banner */}
      <section className="bg-primary/10 py-6 md:hidden mb-10">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
            <h2 className="text-xl font-bold text-primary">Get the EzRun App</h2>
             <InteractiveHoverButton 
                text="Download Now" 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.machmate.controller', '_blank')}
                className="h-10 w-48 flex items-center justify-center text-sm"
              />
        </div>
      </section>

      {/* Hero Section */}
      <Hero />

      {/* Products Grid */}
      <section id="products" className="container px-4 mt-16 md:mt-20 mb-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-3">Our Innovative Products</h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mb-6" />
          <p className="max-w-2xl text-center text-muted-foreground text-sm md:text-lg italic opacity-90 px-4">
            "First in India to create these two revolutionary products, dedicated to making human life easy, reliable, and fast for a better tomorrow."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </div>
      </section>

      {/* App Showcase Animation */}
      {/* App Showcase */}
      <section className="bg-muted/10 py-16 md:py-24 hidden md:block">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-none text-primary mb-8">
              EzRun App
            </h2>
            <div className="flex flex-col items-center gap-6">
                 <p className="text-lg text-muted-foreground max-w-2xl">
                    Control your world with a single tap. Download the EzRun app for seamless automation.
                 </p>
                 <InteractiveHoverButton 
                    text="Get it on Play Store" 
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.machmate.controller', '_blank')}
                    className="h-14 w-64 flex items-center justify-center"
                  />
            </div>
        </div>
      </section>

      {/* Made in India Section */}
      <section className="py-8 flex flex-col items-center justify-center bg-background">
        <div className="text-center space-y-4 animate-fade-in relative">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Innovation Hub</span>
            <div className="h-0.5 w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-9xl font-black text-white/[0.05] uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
            Bharat
          </h2>
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Made in <span className="text-primary">India</span>
            </p>
            <div className="flex flex-col items-center gap-1 mt-3">
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                With <span className="text-red-500 text-xl animate-pulse">❤</span> for the World
              </p>
              <p className="text-[10px] font-medium text-primary/60 uppercase tracking-[0.25em] mt-1">
                Made in India with Love
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground text-sm">Trusted by users across India</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedback.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm transition-transform hover:scale-110">
                  {f.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{f.name}</h4>
                  <p className="text-[10px] text-muted-foreground">{f.location}</p>
                </div>
              </div>
              <p className="text-xs italic text-muted-foreground leading-relaxed">"{f.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center underline decoration-primary decoration-2 underline-offset-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="group border-b border-white/5 pb-4 last:border-0">
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-4 h-4 text-primary" /> {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
