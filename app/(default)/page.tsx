import NewsletterSection from "@/src/components/sections/newsletter/NewsletterSection";
import WhyUsSection from "@/src/components/sections/whyUs/WhyUsSection";
import Hero from "@/src/components/sections/Hero";
import Wrapper from "@/src/components/utils/Wrapper";

export default async function Home() {
  return (
    <>
      <Hero />
      <div className="w-full grid place-items-center">
        <Wrapper className="flex flex-col items-start justify-start gap-20 p-10">
          {/* <FeaturedProducts/> */}
          <WhyUsSection />
          {/* <ReviewsSection/> */}
          {/* <FAQSection/> */}
        </Wrapper>
      </div>
      <Wrapper parentClassName="bg-secondary" className="max-w-[100%]">
        <NewsletterSection />
      </Wrapper>
      {/* <Footer/> */}
    </>
  );
}
