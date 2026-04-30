import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ShieldCheck, ShoppingCart, Minus, Plus, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (!product || product.isActive === false) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product || product.isActive === false) return null;

  const { hero, sections, cta } = product;

  const whatsappUrl = `https://wa.me/919974486076?text=${encodeURIComponent(
    hero.whatsappMsg
  )}`;

  const renderSection = (section, idx) => {
    switch (section.type) {
      case "text_cards":
        return (
          <section key={idx} className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-muted-foreground">{section.subtitle}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-card border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "modes":
        return (
          <section key={idx} className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-16 text-center underline decoration-primary decoration-4 underline-offset-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((mode, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors duration-300"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white">
                      <mode.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{mode.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {mode.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center text-xs font-semibold text-primary uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 mr-1" /> Reliable
                      performance
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case "gallery_grid":
        return (
          <section key={idx} className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
                {section.icon && (
                  <section.icon className="w-8 h-8 text-primary" />
                )}
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center items-center">
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-black max-w-[300px]"
                  >
                    <img
                      src={img}
                      alt={`${product.hero.titlePrimary} Interface ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "bullets_grid":
        return (
          <section key={idx} className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-card border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                      <item.icon className="w-5 h-5" /> {item.title}
                    </h3>
                    {item.desc && (
                      <p className="mb-4 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    )}
                    <ul className="space-y-3 text-muted-foreground">
                      {item.bullets.map((bullet, j) => (
                        <li key={j}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "features_grid":
        return (
          <section key={idx} className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-16 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {section.items.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 bg-card border shadow-sm rounded-2xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:-translate-y-1 transition-transform">
                    <f.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">{f.title}</h4>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case "overview_split":
        return (
          <section key={idx} className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
                {section.icon && (
                  <section.icon className="w-8 h-8 text-primary" />
                )}
                {section.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="relative group max-w-sm">
                  <img
                    src={section.leftImage}
                    alt={`${product.hero.titlePrimary} Box`}
                    className="w-full h-auto object-contain max-h-[400px] hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative group max-w-sm rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-2xl bg-black">
                  <img
                    src={section.rightImage}
                    alt={`${product.hero.titlePrimary} App Interface`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  const BadgeIcon = hero.badgeIcon;

  return (
    <div className="flex flex-col py-0 gap-0">
      {/* Hero Section */}
      <BackgroundPaths>
        <section className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-10 pt-6 lg:pb-20 lg:pt-10">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {BadgeIcon && <BadgeIcon className="w-4 h-4" />} {hero.badgeText}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {hero.titlePrimary}{" "}
              <span className="text-primary">{hero.titleSecondary}</span>
            </h1>
            {/* Desktop Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed hidden md:block">
              {hero.descriptionDesktop}
            </p>
            {/* Mobile Description */}
            <p className="text-[17px] text-muted-foreground mb-8 max-w-xl leading-relaxed block md:hidden">
              {hero.descriptionMobile}
            </p>
            <div className="bg-card border shadow-xl rounded-2xl p-6 max-w-[420px] mt-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 bg-primary h-full" />
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                  Direct Price
                </span>
                {hero.priceBadge && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      hero.priceBadge.toLowerCase().includes("discount")
                        ? "bg-green-500/10 text-green-600"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {hero.priceBadge}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                  {hero.priceAmount}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  {hero.priceSuffix}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 font-medium">
                {hero.priceNote}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  {hero.buttons.slice(0, 2).map((btn, idx) => (
                    <InteractiveHoverButton
                      key={idx}
                      text={btn.text}
                      onClick={() => {
                        if (btn.type === "inquiry")
                          window.open(whatsappUrl, "_blank");
                        else if (btn.link) navigate(btn.link);
                      }}
                      className={
                        idx === 0
                          ? "flex-1 bg-white text-primary border-none font-semibold h-12 shadow-lg hover:bg-white/90"
                          : "flex-1 bg-background text-foreground border shadow-sm font-semibold h-12 hover:bg-muted/50"
                      }
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <Dialog open={isBuyModalOpen} onOpenChange={setIsBuyModalOpen}>
                    <DialogTrigger asChild>
                      <InteractiveHoverButton
                        text="Buy Now"
                        className="flex-1 bg-primary text-primary-foreground border-none font-bold h-12 shadow-lg hover:shadow-primary/25"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <ShoppingCart className="w-5 h-5 text-primary" />
                          Order {hero.titleSecondary}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-3">
                          <label
                            htmlFor="quantity"
                            className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
                          >
                            Select Quantity
                          </label>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-12 w-12 rounded-xl border-2 hover:bg-primary/5 hover:text-primary transition-colors"
                              onClick={() =>
                                setQuantity(Math.max(1, quantity - 1))
                              }
                            >
                              <Minus className="w-5 h-5" />
                            </Button>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(parseInt(e.target.value) || 1)
                              }
                              className="h-12 text-center text-xl font-bold rounded-xl border-2 focus-visible:ring-primary"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-12 w-12 rounded-xl border-2 hover:bg-primary/5 hover:text-primary transition-colors"
                              onClick={() => setQuantity(quantity + 1)}
                            >
                              <Plus className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="w-full h-12 rounded-xl text-lg font-bold"
                          onClick={() => {
                            const msg = `I want to buy the ${
                              hero.titlePrimary + " " + hero.titleSecondary
                            }. Quantity: ${quantity}`;
                            window.open(
                              `https://wa.me/919974486076?text=${encodeURIComponent(
                                msg
                              )}`,
                              "_blank"
                            );
                            setIsBuyModalOpen(false);
                          }}
                        >
                          Confirm Order
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  {hero.buttons[2] && (
                    <InteractiveHoverButton
                      text={hero.buttons[2].text}
                      className="flex-1 bg-[#102A43] text-white border-none font-semibold h-12 shadow-md hover:bg-[#102a43]/90"
                      onClick={() => {
                        if (hero.buttons[2].link) navigate(hero.buttons[2].link);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-20 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <img
                src={hero.image}
                alt={`${hero.titlePrimary} ${hero.titleSecondary}`}
                className={
                  product.id === "solar"
                    ? "relative rounded-[2rem] border-[8px] border-white/60 shadow-xl w-full h-auto object-cover max-w-sm lg:max-w-md transition-transform duration-500 group-hover:scale-[1.02]"
                    : "relative w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] rounded-[2rem] border-[8px] border-white/60 shadow-xl"
                }
              />
            </div>
          </div>
        </section>
      </BackgroundPaths>

      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-[11px] font-bold text-primary/70 uppercase tracking-widest border border-primary/10 animate-fade-in">
          <Truck className="w-3.5 h-3.5" />
          <span>7 Days Fast Delivery</span>
        </div>
      </div>
      {/* Dynamic Sections */}
      {sections.map((section, idx) => renderSection(section, idx))}


      {/* Call to Action */}
      {cta && (
        <section className="container mx-auto px-4 py-20 animate-fade-in">
          <div className="bg-primary/95 backdrop-blur-sm rounded-[40px] p-12 text-center text-white space-y-6 shadow-2xl border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold">{cta.title}</h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto">{cta.desc}</p>
            <div className="flex justify-center pt-4">
              <InteractiveHoverButton
                text={cta.buttonText}
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="h-14 w-72 bg-white text-primary hover:bg-white"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
