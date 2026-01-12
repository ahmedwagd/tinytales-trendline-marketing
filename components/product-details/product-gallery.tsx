"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "/products/man-hoodie.png",
  "/products/white.png",
  "/products/red.png",
  "/products/black.png",
];

export default function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Main Image Stage */}
      <div className="relative group rounded-3xl overflow-hidden bg-gray-100 aspect-4/5 lg:aspect-auto w-full h-full  shadow-sm">
        <div className="absolute inset-0 flex items-center justify-center shadow-2xl bg-white/80 px-4">
          {/*  */}
        </div>
        <Image
          src={IMAGES[currentImage]}
          alt="Product Image"
          fill
          objectFit="cover"
          className="object-cover"
          priority
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 items-center">
        {IMAGES.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`relative w-[calc(33.33%)] h-45.75 bg-[#F5F5F5] rounded-xl overflow-hidden cursor-pointer transition-all ${
              currentImage === idx ? "border-black" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx}`}
              fill
              className="object-cover"
            />
            {/* The +2 overlay example based on design */}
            {idx === 2 && IMAGES.length > 3 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-lg">
                +{IMAGES.length - 3 + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
