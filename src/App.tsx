import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
