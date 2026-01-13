import { Star } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="py-10 mt-15 lg:mt-25">
      <h2 className="text-2xl font-semibold mb-8 relative">
        Rating & Reviews
        <span className="absolute -bottom-0.5 left-0 w-12 h-1 bg-[#BE968E] rounded-bl-md"></span>
      </h2>
      <div className="flex items-center justify-between gap-35 lg:gap-0 mt-5 lg:mt-3.5">
        <div className="w-full lg:w-2/3">
          <div className="flex items-center flex-col lg:flex-row gap-6">
            <div className="text-[80px] lg:text-[120px] font-medium">
              4,5<span className="text-2xl text-[#B0B0B0] font-normal">/5</span>
            </div>
            <div className="w-full lg:w-4/6">
              <div className="space-y-2">
                {[
                  { stars: 5, pct: "67%" },
                  { stars: 4, pct: "15%" },
                  { stars: 3, pct: "6%" },
                  { stars: 2, pct: "3%" },
                  { stars: 1, pct: "9%" },
                ].map((row) => (
                  <div
                    key={row.stars}
                    className="flex items-center gap-3 text-xs font-semibold text-gray-500"
                  >
                    <div className="flex items-center gap-1 w-8">
                      <Star className="w-3 h-3 fill-[#BE968E] text-[#BE968E]" />
                      {row.stars}
                    </div>
                    <div className="flex-1 h-1.5 bg-[#E6E6E6] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#BE968E]"
                        style={{ width: row.pct }}
                      />
                    </div>
                    <div className="w-8 text-right">{row.pct}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-sm text-gray-500 mb-4">Total Reviews</div>
            <div className="text-[60px] font-bold mb-1">3.0K</div>
            <button className="bg-[#bc9b8b] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#a88a7a] transition">
              Add Comment
            </button>
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="mt-10 mb-6 lg:mt-16 lg:mb-8">
        <div className="space-y-5 lg:space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border-b pb-10.5 last:pb-0 lg:pb-8 last:border-0"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center justify-center gap-2 lg:gap-4">
                  <h4 className="font-bold text-[#020202]">Alex Daewn</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${
                          s <= 4
                            ? "fill-[#BE968E] text-[#BE968E]"
                            : "text-[#BE968E]/60 "
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-[#545454]">4 months ago</span>
              </div>
              <p className="text-[#545454] lg:text-[#020202] text-xs lg:text-[16px] font-medium lg:font-normal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-[#F5F5F5] hover:bg-[#F5F5F5]/60 px-6 lg:px-9 py-4 rounded-xl text-sm font-semibold text-[#BE968E] transition">
            View More Comments
          </button>
        </div>
      </div>
    </section>
  );
}
