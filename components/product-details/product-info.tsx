"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Minus, Plus } from "lucide-react";

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    { name: "red", hex: "#D90202" },
    { name: "blue", hex: "#B8CCDA" },
    { name: "olive", hex: "#988755" },
    { name: "sky", hex: "#7198C8" },
    { name: "grey", hex: "#5D5D5B" },
  ];

  return (
    <section className="flex flex-col gap-6">
      {/* Badge & Actions */}
      <div className="flex justify-between items-start">
        <span className="px-4 py-3 rounded-full border border-[#BE968E] text-sm font-semibold text-[#BE968E]">
          T-shirt
        </span>
        <div className="flex gap-2">
          <button className="text-[#BE968E] rounded-md py-4 px-3 bg-none border border-[#4040401A]/60 hover:bg-[#4040401A]/60">
            <ShoppingBag size={24} />
          </button>
          <button className="text-[#BE968E] rounded-md py-4 px-3 bg-none border border-[#4040401A]/60 hover:bg-[#4040401A]/60">
            <Heart size={24} />
          </button>
        </div>
      </div>

      {/* Title & Price */}
      <div>
        <h1 className="text-lg font-medium text-[#010202]">
          J.VER Men Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>
        <div className="space-y-1">
          <div className="space-x-2">
            <span className="text-lg font-medium text-[#010202]">$300.00</span>
            <span className="text-lg font-medium text-[#8A8A8A]/60 line-through">
              $360.00
            </span>
          </div>
          <span className="text-[#333333] text-xs">
            Summer discount up to 20%
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <hr className="border-[#4040401A]/60" />
      {/* Options */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="relative">
          <label className="absolute -top-2 left-3 z-10 px-1 text-xs font-medium">
            Type
          </label>
          <select className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-100">
            <option>Cotton</option>
            <option>Polyester</option>
          </select>
        </div>
        <div className="relative">
          <label className="absolute -top-2 left-3 z-10 px-1 text-xs font-medium">
            Size
          </label>
          <select className="w-full p-3 border rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-100">
            <option>XXL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
          </select>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-6 mt-4 mb-8">
        <span className="block text-sm font-semibold">Colors</span>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`bg-[#F4F7F9] p-2 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedColor === c.name
                  ? "border-black scale-110"
                  : "border-transparent"
              }`}
            >
              <div
                className="w-8 h-8 rounded-full shadow-sm relative"
                style={{ backgroundColor: c.hex }}
              />
              {selectedColor === c.name && (
                <>
                  <span className="sr-only">Selected</span>
                  <span className="absolute -bottom-10/12 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#545454] text-xs font-medium capitalize">
                    {c.name}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="space-x-2 mb-4">
          <span className="text-[16px] lg:text-xl font-medium">Quantity</span>
          <span className="text-xs lg:text-[16px] text-[#8A8A8A]">
            ($300.00 for Piece)
          </span>
        </div>
        <div className="flex flex-col gap-4 lg:gap-27.5 justify-center lg:flex-row">
          {/* Quantity */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 bg-[#F5F5F5] text-[#333333] rounded-lg py-2.5 px-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-md shadow-sm"
              >
                <Minus className="w-6 h-6" />
              </button>
              <span className="font-semibold w-6 text-center">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-md shadow-sm"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <div className="text-xl font-bold">
              ${(300 * quantity).toFixed(2)}
            </div>
          </div>
          {/* button */}
          <button className="w-full bg-[#BE968E] hover:bg-[#BE968E]/90 text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
            Add to Cart
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
