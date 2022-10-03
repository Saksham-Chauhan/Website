import { Hero, Technologies, Testmonial, TrustedPartner } from "../sections";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrustedPartner />
      <Technologies />
      <Testmonial />
    </div>
  );
};

export default Home;
