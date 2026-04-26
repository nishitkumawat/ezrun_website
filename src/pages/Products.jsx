import React from "react";
import { BentoCard } from "@/components/ui/bento-grid";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { cn } from "@/lib/utils";
import { products } from "../data/products";

const Products = () => {
  const activeProducts = products
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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground py-20">
      <section className="container px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Our <span className="text-primary">Products</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-8" />
          <p className="max-w-2xl text-center text-muted-foreground text-lg italic opacity-90">
            Explore our range of innovative IoT solutions designed to make life
            smarter, faster, and more efficient.
          </p>
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-2 gap-3 md:gap-8 max-w-7xl mx-auto",
            activeProducts.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          )}
        >
          {activeProducts.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </div>
      </section>

      {/* Made in India Badge */}
      <section className="py-20 flex flex-col items-center justify-center">
        <div className="text-center space-y-4 relative">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Innovation Hub
            </span>
            <div className="h-0.5 w-12 bg-primary" />
          </div>
          <p className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Made in <span className="text-primary">India</span>
          </p>
          <p className="text-muted-foreground">With ❤️ for the World</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
