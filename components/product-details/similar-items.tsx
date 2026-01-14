"use client";
import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import ProductCard from "./product-card";
import { useRef } from "react";

const SIMILAR_ITEMS = [
  {
    id: 1,
    image: "/products/black-dress.png",
    category: "Dresses",
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["#d2b48c", "#333", "#eee"],
  },
  {
    id: 2,
    image: "/products/white-t-shirt.png",
    category: "Dresses",
    title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free",
    price: 900,
    oldPrice: 1300,
    discount: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    colors: ["#d2b48c", "#333", "#eee"],
  },
  {
    id: 3,
    image: "/products/brown-t-shirt.png",
    category: "Dresses",
    title: "J.VER Men's Dress Shirts Solid Long",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["#d2b48c", "#333", "#eee"],
  },
  {
    id: 4,
    image: "/products/kids-pj.png",
    category: "Dresses",
    title: "J.VER Women's Dress Shirts Solid Long",
    price: 900,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["#d2b48c", "#333", "#eee"],
  },
];

export default function SimilarItems() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 inline-block">
          Similar Items
          <div className="h-1 w-1/2 bg-red-200 mt-1 rounded-full" />
        </h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative">
        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-8 scrollbar-hide"
        >
          {SIMILAR_ITEMS.concat(SIMILAR_ITEMS).map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-[#c49a94] flex items-center justify-center hover:bg-[#b0857f] transition shadow-lg shadow-[#c49a94]/30"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
