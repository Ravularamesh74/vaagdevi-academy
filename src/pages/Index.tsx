import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import Pamphlet from "@/components/Pamphlet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <Features />
        </section>
        <Curriculum />
        <Faculty />
        <Testimonials />
        <Pamphlet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
