import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Link } from "react-router-dom";
import React from "react";

const BentoGrid = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  price,
}) => (
  <Link
    to={href}
    key={name}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl",
      "bg-card shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className,
    )}
  >
    <div className="relative aspect-square w-full overflow-hidden border-b">
      {/* Blurred Backdrop */}
      <div className="absolute inset-0 blur-sm opacity-30">
        {React.cloneElement(background, {
          className: "object-cover w-full h-full"
        })}
      </div>
      
      {/* Main Image */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
        {React.cloneElement(background, {
          className: cn(background.props.className, "object-contain w-full h-full drop-shadow-2xl")
        })}
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-20" />
    </div>
    
    <div className="flex flex-col gap-1 md:gap-2 p-3 md:p-5 bg-background">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
        <h3 className="text-sm md:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        {price && (
          <span className="text-primary font-bold text-sm md:text-lg shrink-0">
            {price}
          </span>
        )}
      </div>
      
      <div className="mt-2 md:mt-4">
        <InteractiveHoverButton
          text="Buy Now"
          className="h-8 md:h-10 w-full text-[10px] md:text-xs font-bold"
        />
      </div>
    </div>
  </Link>
);

export { BentoCard, BentoGrid };
