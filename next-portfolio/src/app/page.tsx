import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Header />
      <div className="w-full max-w-5xl px-6 md:px-12 flex flex-col gap-24 py-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
