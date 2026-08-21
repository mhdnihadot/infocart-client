import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Products from "@/components/home/Products";
import Container from "@/components/layout/Container";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header />
      <Hero />
      <ClientLogos />
      <Products />
    </div>
  );
}
