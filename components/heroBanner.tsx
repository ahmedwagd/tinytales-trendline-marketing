import React from "react";

export default function HeroBanner({ title }: { title: string }) {
  return (
    <div className="h-32 relative">
      <div className="bg-[url(/cover.jpg)] bg-cover bg-top bg-fixed h-full grayscale opacity-5">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-6xl lg:text-9xl font-medium -tracking-tighter select-none text-transparent [-webkit-text-stroke:1px_black]">
          {title}
        </span>
      </div>
      <div className="absolute z-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-xl lg:text-[32px] font-semibold text-black text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
