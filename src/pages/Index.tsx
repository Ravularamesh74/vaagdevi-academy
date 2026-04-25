import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Pamphlet from "@/components/Pamphlet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Curriculum />
        <Faculty />
        <Testimonials />
        <Gallery />
        <Pamphlet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
