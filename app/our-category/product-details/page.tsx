import Breadcrumbs from "@/components/breadcrumbs";
import HeroBanner from "@/components/hero-banner";
import ProductGallery from "@/components/product-details/product-gallery";
import ProductInfo from "@/components/product-details/product-info";
import ReviewsSection from "@/components/product-details/reviews-section";
import SimilarItems from "@/components/product-details/similar-items";

export default function ProductDetailsPage() {
  return (
    <>
      <HeroBanner title="T-Shirt" />
      {/* Container */}
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-6 max-w-7xl">
        <Breadcrumbs />

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-7 mt-6">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Reviews */}
        <ReviewsSection />

        {/* Similar Items */}
        <SimilarItems />
      </div>
    </>
  );
}
