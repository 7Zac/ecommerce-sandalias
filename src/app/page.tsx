import HeroSection from "@/components/home/hero-section";
import FeaturedCategories from "@/components/home/featured-categories";
import PromotionalFeatures from "@/components/home/promotional-features";

export default function HomePage() {
  return (
      <main>
      <HeroSection />
      <PromotionalFeatures />
      <FeaturedCategories />
      </main>
  );
}
