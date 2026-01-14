import { Product } from "@/types";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <div className="w-[288px]">
        {/* Image section */}
        <div className="relative rounded-2xl px-12 pt-16 py-2 border border-black/5 shadow">
          {/* Discount badge */}
          {product.discount && (
            <div className="absolute left-3 top-3 flex gap-2 z-10">
              <div className="text-[#BE968E] rounded-xl px-4 py-2 bg-none border border-[#4040401A]/60 hover:bg-[#4040401A]/60">
                <span className="text-10px font-semibold leading-1">
                  {product.discount}
                </span>
              </div>
            </div>
          )}
          {/* Action buttons */}
          <div className="absolute right-3 top-3 flex gap-2 z-10">
            <div className="flex gap-2">
              <button className="text-[#BE968E] rounded-md p-1.5 bg-none border border-[#4040401A]/60 hover:bg-[#4040401A]/60">
                <ShoppingBag size={24} />
              </button>
              <button className="text-[#BE968E] rounded-md p-1.5 bg-none border border-[#4040401A]/60 hover:bg-[#4040401A]/60">
                <Heart size={24} />
              </button>
            </div>
          </div>

          <div className="relative mx-auto h-49.5 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Content */}
        <div className="mt-4 space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-[#545454]">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-[#BE968E] text-[#BE968E]" />
              <span className="text-xs font-bold text-gray-800">
                {product.rating}
              </span>
              <span className="text-[10px] text-gray-400">
                ({product.reviews})
              </span>
            </div>
          </div>
          <h6 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-800">
            {product.title}
          </h6>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">
                AED {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  AED {product.oldPrice}
                </span>
              )}
            </div>

            {/* Color Swatches */}
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((color, idx) => (
                <span
                  key={idx}
                  className="h-4 w-4 rounded-full border border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="ml-1 text-xs text-gray-400">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
