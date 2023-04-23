import Faq from "./Faq";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import Traits from "./Traits";

const Home = () => {
  return (
    <>
      <Hero />
      <Traits />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Home;
