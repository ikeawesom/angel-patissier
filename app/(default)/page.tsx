import WhyUsSection from "@/src/components/sections/whyUs/WhyUsSection";
import Hero from "@/src/components/utils/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full grid place-items-center p-10">
        <div className="w-full max-w-[1000px]">
          {/* <FeaturedProducts/> */}
          <WhyUsSection />
          {/* <ReviewsSection/> */}
          {/* <FAQSection/> */}
          {/* <NewsletterSection/> */}
        </div>
      </div>
    </>
  );
}
