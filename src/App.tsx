import Faq from "./sections/Faq/Faq";
import Features from "./sections/Features/Features";
import Header from "./sections/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./sections/Pricing/Pricing";
import Testimonial from "./sections/Testimonial/Testimonial";
import Download from "./sections/Download/Download";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
    </main>
  );
};

export default App;
