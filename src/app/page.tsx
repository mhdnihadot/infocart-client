import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Categories from "@/components/home/Categories";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RelatedServices from "@/components/home/RelatedServices";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import AmbientFlow from "@/components/ui/AmbientFlow";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative">
      {/* <AmbientFlow /> */}
      <DesktopHeader />
      <MobileHeader />
      <main className="flex-1 w-full">
        <Hero />
        {/* <ClientLogos /> */}

        {/* Main Content Wrapper */}
        <div className="relative w-full overflow-hidden bg-transparent z-10">
          <Categories />
          <Products />
          <WhyChooseUs />
          <RelatedServices />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
