import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/ui/animated-hero";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { BentoCard } from "@/components/ui/bento-grid";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "../data/products";

const features = products
  .filter((p) => p.isActive)
  .map((p) => ({
    Icon: p.hero.badgeIcon,
    name: p.id === "solar" ? "AI Solar Monitoring" : p.hero.titlePrimary + " " + p.hero.titleSecondary,
    description: p.hero.descriptionMobile,
    href: `/product/${p.id}`,
    cta: "View Details",
    price: p.hero.priceAmount,
    background: (
      <img
        src={p.hero.image}
        alt={p.hero.titlePrimary}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
    ),
    className: "h-auto min-h-[16rem] md:h-[24rem]",
  }));

const feedback = [
  {
    name: "Aarav Patel",
    location: "Ahmedabad, Gujarat",
    comment:
      "The automation is seamless. The shutter controller has made my warehouse management so much easier.",
  },
  {
    name: "Priya Sharma",
    location: "Surat, Gujarat",
    comment:
      "Solar washing system is a game changer! My yield increased by 20% within the first month.",
  },
  {
    name: "Vikram Singh",
    location: "New Delhi",
    comment:
      "Exceptional build quality and great customer support. Highly recommended for industrial needs.",
  },
  {
    name: "Deepak Mehta",
    location: "Rajkot, Gujarat",
    comment:
      "Easy to install and very reliable. The app interface is very user-friendly.",
  },
];

const faqs = [
  {
    q: "How do I connect the shutter controller to WiFi?",
    a: "Connect to the device hotspot 'Shutter_AP', navigate to 192.168.4.1, and enter your home WiFi credentials.",
  },
  {
    q: "Does the solar washing system work offline?",
    a: "Yes, it works in both offline (hotspot range) and online modes for total flexibility.",
  },
  {
    q: "What is the warranty period?",
    a: "We provide a 1-year product warranty on all our automation hardware.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-0 pb-10 min-h-screen bg-background text-foreground">
      {/* Mobile App Download Banner */}
      <section className="bg-primary/10 py-6 md:hidden mb-10">
        <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
          <h2 className="text-xl font-bold text-primary">Get the EzRun App</h2>
          <InteractiveHoverButton
            text="Download Now"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.machmate.controller",
                "_blank",
              )
            }
            className="h-10 w-48 flex items-center justify-center text-sm"
          />
        </div>
      </section>

      {/* Hero Section */}
      <BackgroundPaths>
        <Hero />
      </BackgroundPaths>
      <section id="products" className="container px-6 md:px-8 mt-16 md:mt-20 mb-10 mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-3">
            Our Innovative Products
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mb-6" />
          <p className="max-w-2xl text-center text-muted-foreground text-sm md:text-lg italic opacity-90 px-4">
            "First in India to create these two revolutionary products,
            dedicated to making human life easy, reliable, and fast for a better
            tomorrow."
          </p>
        </div>
        <div 
          className={cn(
            "grid grid-cols-2 gap-3 md:gap-8 max-w-7xl mx-auto",
            features.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          )}
        >
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </div>
      </section>

      {/* App Showcase Animation */}
      {/* App Showcase */}
      <section className="bg-muted/10 py-16 md:py-24 hidden md:block">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-none text-primary mb-8">
            EzRun App
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control your world with a single tap. Download the EzRun app for
              seamless automation.
            </p>
            <InteractiveHoverButton
              text="Get it on Play Store"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.machmate.controller",
                  "_blank",
                )
              }
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
            <span className="text-primary font-bold tracking-widest uppercase text-[10px]">
              Innovation Hub
            </span>
            <div className="h-0.5 w-12 bg-primary" />
          </div>
          <div className="relative z-10 flex flex-col items-center px-6">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-center">
              Made in <span className="text-primary">India</span>
            </p>
            <div className="flex flex-col items-center gap-1 mt-3">
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                With{" "}
                <span className="text-red-500 text-xl animate-pulse">❤</span>{" "}
                for the World
              </p>
              <p className="text-[10px] font-medium text-primary/60 uppercase tracking-[0.25em] mt-1">
                Made in India with Love
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="container mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm">
            Trusted by users across India
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedback.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm transition-transform hover:scale-110">
                  {f.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{f.name}</h4>
                  <p className="text-[10px] text-muted-foreground">
                    {f.location}
                  </p>
                </div>
              </div>
              <p className="text-xs italic text-muted-foreground leading-relaxed">
                "{f.comment}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 md:px-8 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center underline decoration-primary decoration-2 underline-offset-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group border-b border-white/5 pb-4 last:border-0"
              >
                <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-2 text-foreground/90">
                  <CheckCircle className="w-4 h-4 text-primary" /> {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-8 bg-gradient-to-r from-orange-400 to-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We build custom IoT devices at the cheapest rates. Just tell us your
            requirements and we'll convert your thoughts into real products!
          </p>
          <button
            onClick={() => navigate("/iot")}
            className="group bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full flex items-center gap-3 text-lg font-bold mx-auto transition-all hover:scale-105 shadow-xl"
          >
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
