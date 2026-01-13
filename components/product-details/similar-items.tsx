import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

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
  return (
    <div className="min-h-113">
      <h2 className="text-2xl font-semibold mb-8 relative">
        Similar Items
        <span className="absolute -bottom-0.5 left-0 w-12 h-1 bg-[#BE968E] rounded-bl-md"></span>
      </h2>
      <div className="relative py-8 bg-amber-500 h-96">
        <div className="absolute top-0 start-0 flex items-center gap-2 h-96 w-full overflow-y-visible">
          <div className="group cursor-pointer w-[288px]">
            <div className="relative w-[288px] h-[288px] bg-gray-50 rounded-2xl overflow-hidden mb-4">
              <Image
                src={"/products/black-dress.png"}
                alt={"title"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-sm hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-sm hover:text-blue-500">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded">
                30% Off
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-2 leading-tight group-hover:text-[#ea2a33] transition-colors">
                title
              </h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">AED 990</span>
                  <span className="text-xs text-gray-400 line-through">
                    AED 500
                  </span>
                </div>
                {/* Color indicators */}
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-white"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400 border border-white"></div>
                  <div className="w-3 h-3 rounded-full bg-black border border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {SIMILAR_ITEMS.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-3/4 bg-gray-50 rounded-2xl overflow-hidden mb-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-sm hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-sm hover:text-blue-500">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded">
                30% Off
              </span>
            </div>

            <h3 className="font-semibold text-sm mb-1 line-clamp-2 leading-tight group-hover:text-[#ea2a33] transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="font-bold">AED {item.price}</span>
                <span className="text-xs text-gray-400 line-through">
                  AED 500
                </span>
              </div>
              {/* Color indicators */}
      {/* <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-white"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400 border border-white"></div>
                <div className="w-3 h-3 rounded-full bg-black border border-white"></div>
              </div>
            </div>
          </div>
        ))} */}
      {/* </div> */}

      {/* <div className="flex justify-center gap-4 mt-8">
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#bc9b8b] flex items-center justify-center hover:bg-[#a88a7a] transition shadow-lg shadow-[#bc9b8b]/30">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div> */}
    </div>
  );
}

type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  colors: string[];
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="min-w-70 shrink-0 group cursor-pointer">
      {/* Image Container */}
      <div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-4/5 flex items-center justify-center p-4">
        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded">
            {product.discount}
          </span>
        )}

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
            <ShoppingBag size={18} className="text-gray-600" />
          </button>
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
            <Heart size={18} className="text-gray-600" />
          </button>
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full mix-blend-multiply"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-orange-400 text-orange-400" />
            <span className="text-xs font-bold text-gray-800">
              {product.rating}
            </span>
            <span className="text-[10px] text-gray-400">
              ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
          {product.title}
        </h3>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">AED {product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                AED {product.oldPrice}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center -space-x-1">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
            <span className="text-[10px] text-gray-500 ml-1">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SimilarItemsT = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto font-sans">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 inline-block">
          Similar Items
          <div className="h-1 w-1/2 bg-red-200 mt-1 rounded-full" />
        </h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
        {SIMILAR_ITEMS.concat(SIMILAR_ITEMS).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c49a94] hover:bg-[#b0857f] transition-colors">
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};
